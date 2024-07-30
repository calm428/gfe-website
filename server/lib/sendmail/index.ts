import path from "path"
import ejs from "ejs"
import nodemailer from "nodemailer"

export default async function sendmail(
  to: string,
  type: string,
  data: { [key: string]: string },
  mail?: string
) {
  try {
    let user = mail
      ? mail === "INFO"
        ? process.env.INFO_MAIL_USER
        : mail === "CONTACT"
          ? process.env.CONTACT_MAIL_USER
          : mail === "NOTIFICATION"
            ? process.env.NOTIFICATION_MAIL_USER
            : process.env.INFO_MAIL_USER
      : process.env.INFO_MAIL_USER
    let pass = mail
      ? mail === "INFO"
        ? process.env.INFO_MAIL_PASS
        : mail === "CONTACT"
          ? process.env.CONTACT_MAIL_PASS
          : mail === "NOTIFICATION"
            ? process.env.NOTIFICATION_MAIL_PASS
            : process.env.INFO_MAIL_PASS
      : process.env.INFO_MAIL_PASS

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: user,
        pass: pass,
      },
    })

    let template = ""
    let subject = ""

    if (type === "PROPOSAL_SUBMISSION") {
      subject = `Proposal Submission Confirmation - ${data.title}`
      template = await ejs.renderFile(
        path.join(
          process.cwd(),
          `/public/emails/proposal-submission-template.ejs`
        ),
        data
      )
    } else if (type === "PROPOSAL_APPROVED") {
      subject = `Your Proposal Has Been Approved! - ${data.title}`
      template = await ejs.renderFile(
        path.join(
          process.cwd(),
          `/public/emails/proposal-approved-template.ejs`
        ),
        data
      )
    } else if (type === "PROPOSAL_REJECTED") {
      subject = `Update on Your Proposal Submission - ${data.title}`
      template = await ejs.renderFile(
        path.join(
          process.cwd(),
          `/public/emails/proposal-rejected-template.ejs`
        ),
        data
      )
    } else if (type === "CONFIRM_EMAIL") {
      subject = "Confirm your email address"
      template = await ejs.renderFile(
        `components/email/confirm-email-template.ejs`,
        data
      )
    } else if (type === "FORGOT_PASSWORD") {
      subject = "Reset your password"
      template = await ejs.renderFile(
        `components/email/forgot-password-template.ejs`,
        data
      )
    }

    const mailOptions = {
      from: `GFE Foundation <${user}>`,
      to: to,
      subject: subject,
      html: template,
    }

    await transporter.sendMail(mailOptions)

    console.log("Email sent: ", to)
  } catch (error) {
    console.log(error)
  }
}
