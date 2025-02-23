"use server"
import { db } from "@/lib/db"
import { getVerificationTokenByToken } from "@/data/verification-token"
import { getUserByEmail } from "@/data/user";


export const newVerification = async (token: string) => {

    const verificationData = await getVerificationTokenByToken(token);


    if (!verificationData) {
        return { error: "User not found" }
    }

    const expirationDate = new Date(verificationData.expires);

    if (expirationDate < new Date()) {
        return { error: "Token expired" }
    }   

    const user = await getUserByEmail(verificationData.email);

    if (!user?.email) {
        return { error: "User not found" }
    }
  
    await db.user.update({
        where: {
            email: user.email
        },
        data: {
            emailVerified: new Date(Date.now())
        }
    })

    await db.verificationToken.delete({
        where: {
            token: token
        }
    })

    return {
        success: "Email Verified"
    }
        

}