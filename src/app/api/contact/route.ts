import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getTemplatedEmail } from '@/lib/email-utils';

// --- Configuration ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const CC_EMAIL = process.env.CC_EMAIL;
const BCC_EMAIL = process.env.BCC_EMAIL;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@example.com';

// Placeholder for the brochure download link
// NOTE: User must replace this with the actual public URL to the brochure file.
const BROCHURE_DOWNLOAD_LINK = 'https://www.cinutedigital.com/downloads/cdpl-brochure.pdf';

// --- Nodemailer Transporter ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // Use `true` for port 465, `false` for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// --- Helper function to send email ---
async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// --- API Handler ---
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, type, source, interest, message } = body; // 'type': 'contact' or 'brochure', 'source': form location

    // 1. Basic Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Determine Email Content based on 'type' and available fields
    const isBrochureRequest = type === 'brochure';
    const formSource = source || (isBrochureRequest ? 'Home Page - Brochure Download Modal' : 'Contact Form');
    const isHomeHeroForm = formSource.includes('Home Hero') || formSource.includes('Enquiry Form - Home Hero Section');

    // Subject Prefix Logic
    let subjectPrefix = '[NEW LEAD]';
    if (isBrochureRequest) {
      subjectPrefix = '[BROCHURE DOWNLOAD - HOME PAGE]';
    } else if (isHomeHeroForm) {
      subjectPrefix = '[Enquiry]';
    }

    // Admin Template Logic
    let adminTemplate = 'admin-notification-basic.html';
    // Use detailed template if interest or message is provided
    const hasDetailedFields = interest || message;

    if (hasDetailedFields) {
      adminTemplate = 'admin-notification.html';
    } else if (isHomeHeroForm) {
      adminTemplate = 'admin-notification-home-hero.html';
    }

    // 3. Prepare Admin Notification Email
    const adminData: Record<string, string> = {
      fullName,
      email,
      phone,
      type: isBrochureRequest ? 'Brochure Download' : 'General Inquiry',
      source: isHomeHeroForm ? 'Enquiry Form - Home Hero Section' : formSource,
      downloadLink: isBrochureRequest ? BROCHURE_DOWNLOAD_LINK : 'N/A',
      year: new Date().getFullYear().toString(),
    };

    // Only include interest and message if they exist (for detailed template)
    if (hasDetailedFields) {
      if (interest) adminData.interest = interest;
      if (message) adminData.message = message;
    }
    const adminHtml = await getTemplatedEmail(adminTemplate, adminData);

    const adminSubject = isHomeHeroForm
      ? `${subjectPrefix} New Lead from ${fullName} - Home Page Form`
      : `${subjectPrefix} New Lead from ${fullName} - ${formSource}`;

    const adminMailOptions: nodemailer.SendMailOptions = {
      from: SMTP_FROM_EMAIL,
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      bcc: BCC_EMAIL,
      subject: adminSubject,
      html: adminHtml,
    };

    // 4. Prepare User Confirmation Email
    let userMailOptions: nodemailer.SendMailOptions;

    if (isBrochureRequest) {
      const userHtml = await getTemplatedEmail('brochure-confirmation.html', {
        fullName,
        downloadLink: BROCHURE_DOWNLOAD_LINK,
        year: new Date().getFullYear().toString(),
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'Your CDPL Brochure is Ready for Download!',
        html: userHtml,
      };
    } else {
      // General Contact Confirmation
      const userHtml = await getTemplatedEmail('user-confirmation.html', {
        fullName,
        phone,
        email,
        year: new Date().getFullYear().toString(),
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'Thank You for Contacting CDPL!',
        html: userHtml,
      };
    }

    // 5. Send Emails
    const adminSuccess = await sendEmail(adminMailOptions);
    const userSuccess = await sendEmail(userMailOptions);

    if (adminSuccess && userSuccess) {
      return NextResponse.json({ message: 'Form submitted and emails sent successfully' }, { status: 200 });
    } else {
      // Even if one fails, we return a success to the user to avoid confusion, 
      // but log the error on the server.
      console.warn('One or more emails failed to send. Check server logs.');
      return NextResponse.json({ message: 'Form submitted, but there was an issue sending confirmation email.' }, { status: 200 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}