import { Client as WorkFlowClient } from "@upstash/workflow";
import config from "@/lib/config";
import { Client as QStashClient, resend } from "@upstash/qstash";
import WelcomeEmail from "@/components/template/WelcomeEmail";
import { Resend } from "resend";

export const workflowClient = new WorkFlowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  const defaultResendEmail = new Resend(config.env.resendToken);

  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "University Library <contact@universitylibrary.store>",
      to: [email],
      subject: subject,
      // html: message,
      react: WelcomeEmail({ message }),
    },
  });

  // !Currently using default resend docs with resend qstash as qtash workflow is not send email with resend

  try {
    await defaultResendEmail.emails.send({
      from: "University Library <contact@universitylibrary.store>",
      to: [email],
      subject: subject,
      react: WelcomeEmail({ message }),
    });
  } catch (error) {
    console.error("Error send the resend email:", error);
  }
};

// 3:52:56
