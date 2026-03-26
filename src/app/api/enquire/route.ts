import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { appendRowToSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, phone, company, message } = data;

        // Validate required fields
        if (!name || !email || !phone || !company || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Configure Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Read Email Template
        const templatePath = path.join(process.cwd(), 'src/lib/email-templates/training-enquiry.html');
        let htmlContent = await fs.readFile(templatePath, 'utf-8');

        // Replace placeholders
        htmlContent = htmlContent
            .replace('{{name}}', name)
            .replace('{{email}}', email)
            .replace('{{phone}}', phone)
            .replace('{{company}}', company)
            .replace('{{message}}', message);

        // Send Email
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL,
            to: process.env.HR_EMAIL, // Sending to HR/Admin
            subject: `New Training Enquiry from ${company} - ${name}`,
            html: htmlContent,
            replyTo: email,
        });

        // Append to Google Sheet (Async)
        appendRowToSheet({
            date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName: name,
            email,
            phone,
            source: 'Training Enquiry API', // Likely from EnquireModal
            type: 'Training Enquiry',
            interest: '',
            message: `Company: ${company}. Message: ${message}`
        }).catch(err => console.error('Google Sheet background update error:', err));

        return NextResponse.json({ message: 'Enquiry sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Enquiry API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
