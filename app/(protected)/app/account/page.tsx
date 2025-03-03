import { auth } from "@/auth";
import Info from "./_components/info";
import { Logout } from "./_components/logout";
// import { User, Mail, Lock } from "lucide-react";

const infoToBeShown = [
  {
    label: "Personal Information",
    href: "/app/account/personal-info",
  },
  {
    label: "Change Password",
    href: "/app/account/change-password",
  },
  {
    label: "Email",
    href: "/app/account/email-management",
  },
];

export default async function AccountPage() {
  const session = await auth();
  console.log(session?.user);

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center mt-10">
        {infoToBeShown.map((info) => (
          <Info key={info.href} label={info.label} href={info.href} />
        ))}
      </div>
      <Logout />
    </div>
  );
}
