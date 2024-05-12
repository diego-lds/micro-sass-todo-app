import { auth } from "@/services/auth";
import AuthForm from "../auth/_components/auth-form";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <p>APP + {session?.user?.email}</p>
    </div>
  );
}
