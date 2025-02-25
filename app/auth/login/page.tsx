export const dynamic = "force-static";
import { LoginForm } from "@/components/auth/login-form";

export default function Login() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoginForm />
    </div>
  );
}
