import { AuthLayout } from "../../components/admin/auth/layout/AuthLayout";
import { LoginForm } from "../../components/admin/auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
