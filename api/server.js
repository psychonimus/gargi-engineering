import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load .env file safely (local development fallback)
try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({ path: path.resolve(__dirname, "../.env") });
  dotenv.config();
} catch (e) {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Helper to create transporter on demand with environment validation
const getTransporter = () => {
  const user = process.env.SMTP_USER || "pgdiginitin78@gmail.com";
  const pass = (
    process.env.SMTP_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    ""
  ).replace(/\s+/g, "");

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials not configured. Please add SMTP_USER and SMTP_APP_PASSWORD in your Vercel Dashboard under Settings -> Environment Variables."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
};

// Destination email to receive all website inquiries
const getReceiverEmail = () => {
  return (
    process.env.RECEIVER_EMAIL ||
    process.env.SMTP_USER ||
    "pebgargiengineering@gmail.com"
  );
};

// Verify SMTP connection on local startup if password is provided
if (!process.env.VERCEL) {
  try {
    const transporter = getTransporter();
    transporter.verify((error) => {
      if (error) {
        console.error("❌ SMTP Connection Error:", error.message);
      } else {
        console.log(
          "✅ SMTP Transporter connected successfully and ready to send emails.",
        );
      }
    });
  } catch (err) {
    console.warn("⚠️ SMTP Transporter warning:", err.message);
  }
}

app.get(["/api/health", "/health", "/api", "/"], (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Gargi Industry Email API is running smoothly.",
  });
});

app.post(["/api/consultation", "/consultation"], async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      serviceInterest,
      projectType,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !company) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill in all required fields (Full Name, Email, Phone, Company).",
      });
    }

    const plainText = `
GARGI ENGINEERING SERVICES - TECHNICAL CONSULTATION REQUEST
------------------------------------------------------------
Full Name: ${fullName}
Business Email: ${email}
Phone / WhatsApp: ${phone}
Company / Org: ${company}
Service Required: ${serviceInterest || "PEB Design & Structural Engineering"}
Project Scope: ${projectType || "Industrial Facility / Plant"}

Project Brief / Requirements:
${message ? message : "No additional description provided."}

------------------------------------------------------------
Received via Gargi Engineering Portal (www.gargipeb.com) on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = process.env.SMTP_USER || "pgdiginitin78@gmail.com";

    const mailOptions = {
      from: `"Consultation Enquiry - ${fullName}" <${senderEmail}>`,
      replyTo: email,
      to: getReceiverEmail(),
      subject: `Consultation Enquiry: ${fullName} (${company})`,
      text: plainText,
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Gargi Engineering Web Portal",
      },
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Consultation Enquiry - ${fullName}</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #334155; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: #0b1e38; padding: 24px; text-align: center; color: #ffffff; }
            .badge { display: inline-block; background: #f59e0b; color: #000000; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 12px; text-transform: uppercase; margin-bottom: 8px; }
            .title { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; }
            .subtitle { margin: 6px 0 0; font-size: 14px; color: #cbd5e1; }
            .body-content { padding: 24px; }
            .client-banner { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px 16px; margin-bottom: 18px; display: flex; align-items: center; }
            .client-banner-name { font-size: 16px; font-weight: 700; color: #166534; }
            .section-label { font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 14px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 18px; }
            .table td { padding: 8px 6px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
            .table .label { width: 36%; font-weight: 600; color: #64748b; }
            .table .val { font-weight: 500; color: #0f172a; }
            .tag-blue { background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 13px; }
            .tag-amber { background: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 13px; }
            .message-box { background: #f8fafc; border-left: 4px solid #f59e0b; padding: 12px 14px; border-radius: 4px; margin-top: 14px; }
            .message-text { margin: 6px 0 0; font-size: 14px; color: #1e293b; line-height: 1.5; white-space: pre-line; }
            .footer { background: #f8fafc; padding: 14px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <span class="badge">Technical Consultation Request</span>
              <h1 class="title">${fullName}</h1>
              <p class="subtitle">${company}</p>
            </div>
            <div class="body-content">
              <div class="section-label">Enquiry Details</div>
              <table class="table">
                <tr>
                  <td class="label">Contact Name:</td>
                  <td class="val"><strong style="color: #0b1e38; font-size: 15px;">${fullName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Business Email:</td>
                  <td class="val"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp:</td>
                  <td class="val"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td class="label">Company / Org:</td>
                  <td class="val"><strong>${company}</strong></td>
                </tr>
                <tr>
                  <td class="label">Service Required:</td>
                  <td class="val"><span class="tag-blue">${serviceInterest || "PEB Design & Structural Engineering"}</span></td>
                </tr>
                <tr>
                  <td class="label">Project Scope:</td>
                  <td class="val"><span class="tag-amber">${projectType || "Industrial Facility / Plant"}</span></td>
                </tr>
              </table>

              <div class="message-box">
                <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Project Brief / Requirements:</strong>
                <p class="message-text">${message ? message : "No additional description provided."}</p>
              </div>
            </div>
            <div class="footer">
              Sent via Gargi Engineering Portal (www.gargipeb.com) &bull; ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email via SMTP
    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Consultation email for "${fullName}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Consultation request sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending consultation email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process consultation request.",
    });
  }
});

// ════════════════════════════════════════════════════════════════
// 2. ROUTE: CONTACT PAGE FORM (/api/contact)
// ════════════════════════════════════════════════════════════════
app.post(["/api/contact", "/contact"], async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in Name, Email, and Message.",
      });
    }

    // Plain text alternative (critical for passing spam filters)
    const plainText = `
GARGI ENGINEERING SERVICES - CONTACT ENQUIRY
--------------------------------------------
Enquiry From: ${name}
Email Address: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Service of Interest: ${service || "PEB Structural Design & Analysis"}

Message Content:
${message}

--------------------------------------------
Sent via Gargi Engineering Contact Page (www.gargipeb.com) on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = process.env.SMTP_USER || "pgdiginitin78@gmail.com";

    const mailOptions = {
      from: `"Contact Enquiry - ${name}" <${senderEmail}>`,
      replyTo: email,
      to: getReceiverEmail(),
      subject: `Contact Enquiry: ${name} (${company || "Website Lead"})`,
      text: plainText,
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Gargi Engineering Web Portal",
      },
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Enquiry - ${name}</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #334155; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: #0b1e38; padding: 24px; text-align: center; color: #ffffff; }
            .badge { display: inline-block; background: #e63a27; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 12px; text-transform: uppercase; margin-bottom: 8px; }
            .title { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; }
            .subtitle { margin: 6px 0 0; font-size: 14px; color: #cbd5e1; }
            .body-content { padding: 24px; }
            .section-label { font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 14px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 18px; }
            .table td { padding: 8px 6px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
            .table .label { width: 36%; font-weight: 600; color: #64748b; }
            .table .val { font-weight: 500; color: #0f172a; }
            .tag-blue { background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 13px; }
            .message-box { background: #f8fafc; border-left: 4px solid #e63a27; padding: 12px 14px; border-radius: 4px; margin-top: 14px; }
            .message-text { margin: 6px 0 0; font-size: 14px; color: #1e293b; line-height: 1.5; white-space: pre-line; }
            .footer { background: #f8fafc; padding: 14px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <span class="badge">New Contact Enquiry</span>
              <h1 class="title">${name}</h1>
              <p class="subtitle">${company ? company : "Website Inquiry"}</p>
            </div>
            <div class="body-content">
              <div class="section-label">Sender Details</div>
              <table class="table">
                <tr>
                  <td class="label">Contact Name:</td>
                  <td class="val"><strong style="color: #0b1e38; font-size: 15px;">${name}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td class="val"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td class="val">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : "<em>Not provided</em>"}</td>
                </tr>
                <tr>
                  <td class="label">Company Name:</td>
                  <td class="val">${company ? `<strong>${company}</strong>` : "<em>Not provided</em>"}</td>
                </tr>
                <tr>
                  <td class="label">Service of Interest:</td>
                  <td class="val"><span class="tag-blue">${service || "PEB Structural Design & Analysis"}</span></td>
                </tr>
              </table>

              <div class="message-box">
                <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Message Content:</strong>
                <p class="message-text">${message}</p>
              </div>
            </div>
            <div class="footer">
              Sent via Gargi Engineering Contact Page (www.gargipeb.com) &bull; ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email via SMTP
    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Contact inquiry for "${name}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process contact message.",
    });
  }
});
// ════════════════════════════════════════════════════════════════
// 3. ROUTE: BROCHURE DOWNLOAD ENQUIRY (/api/brochure)
// ════════════════════════════════════════════════════════════════
app.post(["/api/brochure", "/brochure"], async (req, res) => {
  try {
    const { fullName, email, phone, company, designation, serviceInterest } =
      req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name and email.",
      });
    }

    const plainText = `
GARGI ENGINEERING SERVICES - BROCHURE DOWNLOAD LEAD
----------------------------------------------------
Full Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Designation: ${designation || "Not provided"}
Service of Interest: ${serviceInterest || "PEB Design & Engineering"}
----------------------------------------------------
Downloaded via Gargi Engineering Portal on ${new Date().toLocaleString()}
    `.trim();

    const senderEmail = process.env.SMTP_USER || "pgdiginitin78@gmail.com";

    const mailOptions = {
      from: `"Brochure Lead - ${fullName}" <${senderEmail}>`,
      replyTo: email,
      to: getReceiverEmail(),
      subject: `Brochure Download Lead: ${fullName} (${company || "Website Visitor"})`,
      text: plainText,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background: #0b1e38; padding: 20px; text-align: center; color: #ffffff; }
            .body { padding: 24px; font-size: 14px; color: #334155; }
            .table { width: 100%; border-collapse: collapse; }
            .table td { padding: 8px; border-bottom: 1px solid #f1f5f9; }
            .label { font-weight: 600; color: #64748b; width: 40%; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2 style="margin:0; color:#ffffff;">Brochure Download Request</h2>
              <p style="margin:4px 0 0; color:#cbd5e1; font-size:13px;">New lead from website</p>
            </div>
            <div class="body">
              <table class="table">
                <tr><td class="label">Full Name:</td><td><strong>${fullName}</strong></td></tr>
                <tr><td class="label">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td class="label">Phone:</td><td>${phone || "<em>Not provided</em>"}</td></tr>
                <tr><td class="label">Company:</td><td>${company || "<em>Not provided</em>"}</td></tr>
                <tr><td class="label">Designation:</td><td>${designation || "<em>Not provided</em>"}</td></tr>
                <tr><td class="label">Service Interest:</td><td>${serviceInterest || "PEB Design & Engineering"}</td></tr>
              </table>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Brochure lead for "${fullName}" sent to ${getReceiverEmail()} (ID: ${info.messageId})`,
    );

    return res.status(200).json({
      success: true,
      message: "Brochure lead recorded successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending brochure lead email:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process brochure request.",
    });
  }
});

// Start local listener only when not running on Vercel Serverless
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(
      `🚀 Gargi Industry SMTP Server is running on http://localhost:${PORT}`,
    );
  });
}

export default app;
