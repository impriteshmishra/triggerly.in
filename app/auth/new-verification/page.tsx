export const dynamic = "force-static";
import { NewVerificationForm } from "@/components/auth/new-verification-form";

export default function VerificationPage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <NewVerificationForm />
    </div>
  );
}
