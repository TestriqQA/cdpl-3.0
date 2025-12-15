import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, number, occupation, courseName } = body;

        // Validate required fields
        if (!name || !email || !number || !courseName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Configure Transporter (Matching api/enquire/route.ts)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL, // Send to HR or fallback to sender
            subject: `New Lead from Mock Test for ${courseName}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Mock Test Lead</title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    </style>
    <!--<![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;">
    <div style="width: 100%; background-color: #f6f9fc; padding: 40px 0;">
        <center>
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 600px; width: 100%; text-align: left;">
                
                <!-- Orange Brand Header -->
                <tr>
                    <td style="background-color: #FF6B35; padding: 24px 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">New Registration</h1>
                        <p style="color: rgba(255, 255, 255, 0.9); margin: 5px 0 0; font-size: 12px; font-weight: 500;">from Mock Test Page</p>
                    </td>
                </tr>

                <!-- Content Body -->
                <tr>
                    <td style="padding: 40px 30px;">
                        
                        <!-- Course Info -->
                        <div style="text-align: center; margin-bottom: 35px;">
                            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase;">Interested In</p>
                            <h2 style="margin: 0; color: #1e293b; font-size: 26px; font-weight: 500;">${courseName}</h2>
                        </div>

                        <!-- Data Grid -->
                        <div style="border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 25px 0;">
                            
                            <!-- Row 1 -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td width="50%" valign="top" style="padding-bottom: 5px;">
                                        <p style="margin: 0 0 4px; color: #393e45ff; font-size: 11px; font-weight: 700; text-transform: uppercase;">Candidate Name</p>
                                        <p style="margin: 0; color: #334155; font-size: 15px; font-weight: 600;">${name}</p>
                                    </td>
                                    <td width="50%" valign="top" style="padding-bottom: 5px;">
                                        <p style="margin: 0 0 4px; color: #393e45ff; font-size: 11px; font-weight: 700; text-transform: uppercase;">Phone Number</p>
                                        <p style="margin: 0; color: #334155; font-size: 15px; font-weight: 600;">${number}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Row 2 -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="50%" valign="top">
                                        <p style="margin: 0 0 4px; color: #393e45ff; font-size: 11px; font-weight: 700; text-transform: uppercase;">Email Address</p>
                                        <a href="mailto:${email}" style="margin: 0; color: #FF6B35; font-size: 15px; font-weight: 600; text-decoration: none;">${email}</a>
                                    </td>
                                    <td width="50%" valign="top">
                                        <p style="margin: 0 0 4px; color: #393e45ff; font-size: 11px; font-weight: 700; text-transform: uppercase;">Occupation</p>
                                        <span style="display: inline-block; background-color: #f1f5f9; color: #475569; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: capitalize;">${occupation}</span>
                                    </td>
                                </tr>
                            </table>

                        </div>

                        <!-- Timestamp Footer -->
                        <p style="margin: 30px 0 0; color: #393e45ff; font-size: 12px; text-align: center;">
                            Registration received via Mock Test Page &bull; ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </td>
                </tr>
            </table>

            <!-- Footer Company Info -->
            <p style="margin-top: 20px; color: #393e45ff; font-size: 12px;">
                &copy; ${new Date().getFullYear()} Cinute Digital. All rights reserved.
            </p>
        </center>
    </div>
</body>
</html>
`,
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
            console.log("Attempting to send email...");

            try {
                const info = await transporter.sendMail(mailOptions);
                console.log("Email sent successfully!", info.messageId);
                return NextResponse.json({ success: true, message: "Email sent successfully" });
            } catch (sendError) {
                console.error("Nodemailer Send Error:", sendError);
                return NextResponse.json({ error: "Failed to send email", details: sendError }, { status: 500 });
            }
        } else {
            console.warn("SMTP credentials missing in env variables.");
            console.log("Debug Env Vars:");
            console.log("SMTP_USER defined:", !!process.env.SMTP_USER);
            return NextResponse.json({ success: true, message: "Email simulation (credentials missing)" });
        }

    } catch (error) {
        console.error("Error processing registration:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
