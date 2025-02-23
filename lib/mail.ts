import getRedisClient from "@/lib/redis";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const client = await getRedisClient();

    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    const key = "options";

    const options = {
      email: email,
      subject: "Confirm your email",
      message: `<p>Click <a href=${confirmLink}>here</a> to confirm email.</p>`,
    };

    client.lPush(key, JSON.stringify(options));
  } catch {
    console.log("Error while connecting to the redis client");
  }
};
