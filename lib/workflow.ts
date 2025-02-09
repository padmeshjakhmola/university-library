import { Client as WorkFlowClient } from "@upstash/workflow";
import config from "@/lib/config";
import { Client as QStashClient, resend } from "@upstash/qstash";

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
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "University Library <hello.universitylibrary.store>",
      to: [email],
      subject: subject,
      html: message,
    },
  });
};
