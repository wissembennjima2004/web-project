const nodemailer = require('nodemailer');

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT || 587),
    secure: Number(process.env.EMAIL_PORT || 587) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

const sendOTPEmail = async (email, firstName, otp) => {
  const transporter = createTransporter();
  const from =
    process.env.EMAIL_FROM && process.env.EMAIL_FROM !== 'noreply@entreprise-platrerie.com'
      ? process.env.EMAIL_FROM
      : process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"Entreprise de Platrerie" <${from}>`,
    to: email,
    subject: 'Code de verification - Entreprise de Platrerie',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f4;padding:20px;border-radius:12px;">
        <div style="background:#1c1917;padding:32px;border-radius:8px 8px 0 0;text-align:center;">
          <h1 style="color:#d97706;margin:0;font-size:26px;">Entreprise de Platrerie</h1>
        </div>
        <div style="background:#ffffff;padding:36px;border-radius:0 0 8px 8px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          <h2 style="color:#1c1917;margin-top:0;">Bonjour ${firstName},</h2>
          <p style="color:#57534e;line-height:1.6;">Merci de vous etre inscrit. Voici votre code de verification :</p>
          <div style="text-align:center;margin:32px 0;">
            <span style="display:inline-block;font-size:42px;font-weight:800;letter-spacing:12px;color:#d97706;background:#fffbeb;border:2px dashed #fcd34d;padding:16px 32px;border-radius:12px;">${otp}</span>
          </div>
          <p style="color:#78716c;font-size:13px;text-align:center;">Ce code expire dans <strong>10 minutes</strong>.</p>
          <p style="color:#a8a29e;font-size:12px;text-align:center;margin-top:24px;border-top:1px solid #e7e5e4;padding-top:16px;">Si vous n'etes pas a l'origine de cette demande, ignorez cet email.</p>
        </div>
      </div>
    `
  });
};

module.exports = { sendOTPEmail };
