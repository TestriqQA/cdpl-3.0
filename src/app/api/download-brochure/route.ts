import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getTemplatedEmail } from '@/lib/email-utils';
import { appendRowToSheet } from '@/lib/google-sheets';

// --- Configuration ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const CC_EMAIL = process.env.CC_EMAIL;
const BCC_EMAIL = process.env.BCC_EMAIL;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@example.com';

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
        const { fullName, email, phone, courseTitle, syllabusLink } = body;

        // 1. Basic Validation
        if (!fullName || !email || !phone || !courseTitle) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Prepare Admin Notification Email
        // We'll use the basic admin notification template or a specific one if available.
        // For now, reusing the pattern from contact route but with specific brochure details.
        const adminData: Record<string, string> = {
            fullName,
            email,
            phone,
            type: 'Brochure Download',
            source: `Home Page - ${courseTitle}`,
            downloadLink: syllabusLink || 'Not provided',
            interest: courseTitle, // Using interest field to show the course name
            message: `User requested brochure for ${courseTitle}`,
        };

        // Use the basic template as it's flexible enough
        const adminHtml = await getTemplatedEmail('admin-notification-basic.html', adminData);

        const adminMailOptions: nodemailer.SendMailOptions = {
            from: SMTP_FROM_EMAIL,
            to: ADMIN_EMAIL,
            cc: CC_EMAIL,
            bcc: BCC_EMAIL,
            subject: `[BROCHURE REQUEST] New Lead for ${courseTitle} - ${fullName}`,
            html: adminHtml,
        };

        // 3. Prepare User Confirmation Email
        // We use the brochure-confirmation.html template
        // If no specific syllabus link is provided, we might want a fallback, 
        // but the frontend should provide one.
        const downloadLink = syllabusLink || '#';

        const userHtml = await getTemplatedEmail('syllabus-confirmation.html', {
            fullName,
            downloadLink: downloadLink,
            courseName: courseTitle, // Assuming template might use this, or we can add it
        });

        const userMailOptions: nodemailer.SendMailOptions = {
            from: SMTP_FROM_EMAIL,
            to: email,
            subject: `Your ${courseTitle} Brochure is Ready!`,
            html: userHtml,
        };

        // 4. Send Emails
        const adminSuccess = await sendEmail(adminMailOptions);
        const userSuccess = await sendEmail(userMailOptions);

        // 5. Append to Google Sheet (Async)
        appendRowToSheet({
            date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName,
            email,
            phone,
            source: `Home Page - ${courseTitle}`,
            type: 'Brochure Download',
            interest: courseTitle,
            message: `Syllabus Link: ${syllabusLink || 'Not provided'}`
        }).catch(err => console.error('Google Sheet background update error:', err));

        if (adminSuccess && userSuccess) {
            return NextResponse.json({ message: 'Brochure request processed successfully' }, { status: 200 });
        } else {
            console.warn('One or more emails failed to send.');
            // Return success to user to avoid friction, but log error
            return NextResponse.json({ message: 'Request processed with some email delivery issues.' }, { status: 200 });
        }

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
