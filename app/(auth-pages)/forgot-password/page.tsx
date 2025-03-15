import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
      <div>
        <h1 className="text-2xl font-medium">Recuperar Senhar</h1>
        <p className="text-sm text-foreground">
          Ainda não é cadastrado?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Realizar cadastro
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="email@email.com.br" required />
        <SubmitButton formAction={forgotPasswordAction}>
          Recuperar Senha
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
