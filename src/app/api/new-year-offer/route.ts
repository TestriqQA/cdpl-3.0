import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { appendRowToSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, phone, course, source } = data;

        // Validate required fields
        if (!name || !email || !phone || !course) {
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
        const templatePath = path.join(process.cwd(), 'src/lib/email-templates/new-year-offer.html');
        let htmlContent = await fs.readFile(templatePath, 'utf-8');

        // Replace placeholders
        htmlContent = htmlContent
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{phone}}/g, phone)
            .replace(/{{course}}/g, course)
            .replace(/{{source}}/g, source || 'New Year Offer Page (Direct)');

        // Send Email
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL,
            to: process.env.HR_EMAIL, // Sending to HR/Admin
            subject: `🎉 New Year Offer Lead: ${name} - ${course}`,
            html: htmlContent,
            replyTo: email,
        });

        // Append to Google Sheet (Async)
        appendRowToSheet({
            date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName: name,
            email,
            phone,
            source: source || 'New Year Offer Page (Direct)',
            type: 'New Year Offer',
            interest: course,
            message: '50% Discount Offer Claim'
        }).catch(err => console.error('Google Sheet background update error:', err));

        return NextResponse.json({ message: 'Enquiry sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('New Year Offer API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
