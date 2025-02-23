import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const token = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return token;
  } catch {
    return null;
  }
};

export const getVerificationTokenById = async (id: string) => {
  try {
    const token = await db.verificationToken.findUnique({
      where: {
        id,
      },
    });
    return token;
  } catch {
    return null;
  }
};
