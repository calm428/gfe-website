import nodemailer from "nodemailer";
import ejs from "ejs";

export default async function sendmail(
  to: string,
  type: string,
  data: { [key: string]: string },
  mail?: string,
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
      : process.env.INFO_MAIL_USER;
    let pass = mail
      ? mail === "INFO"
        ? process.env.INFO_MAIL_PASS
        : mail === "CONTACT"
          ? process.env.CONTACT_MAIL_PASS
          : mail === "NOTIFICATION"
            ? process.env.NOTIFICATION_MAIL_PASS
            : process.env.INFO_MAIL_PASS
      : process.env.INFO_MAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: user,
        pass: pass,
      },
    });

    let template = "";
    let subject = "";

    if (type === "NEW_BLOG_POST") {
      subject = "New Blog Post Alert!";
      template = await ejs.renderFile(
        `components/email/new-blog-template.ejs`,
        data,
      );
    } else if (type === "NEW_EVENT_POST") {
      subject = "New Event Announcement!";
      template = await ejs.renderFile(
        `components/email/new-event-template.ejs`,
        data,
      );
    } else if (type === "NEW_NEWS_POST") {
      subject = "Latest News Update";
      template = await ejs.renderFile(
        `components/email/new-news-template.ejs`,
        data,
      );
    } else if (type === "FEEDBACK_REPLY") {
      subject = "Your Thoughts Matter - Thanks for Your Feedback!";
      template = await ejs.renderFile(
        `components/email/feedback-reply-template.ejs`,
        data,
      );
    } else if (type === "SUBMISSION_APPROVED") {
      subject = `Your Proposal Has Been Approved! - ${data.title}`;
      template = await ejs.renderFile(
        `components/email/proposal-approved-template.ejs`,
        data,
      );
    } else if (type === "SUBMISSION_REJECTED") {
      subject = `Update on Your Proposal Submission - ${data.title}`;
      template = await ejs.renderFile(
        `components/email/proposal-rejected-template.ejs`,
        data,
      );
    }

    const mailOptions = {
      from: `GFE Foundation <${user}>`,
      to: to,
      subject: subject,
      html: template,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent: ", to);
  } catch (error) {
    console.log(error);
  }
}
