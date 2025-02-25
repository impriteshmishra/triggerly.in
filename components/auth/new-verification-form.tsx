"use client";
import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { newVerificationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Loader } from "lucide-react";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof newVerificationSchema>>({
    resolver: zodResolver(newVerificationSchema),
    defaultValues: {
      token: token || "",
    },
  });

  useEffect(() => {
    if (token) {
      onSubmit();
    }
  });

  const onSubmit = () => {
    startTransition(() => {
      newVerification(form.getValues().token).then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setSuccess(res.success);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="New Verification Form"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      {isPending ? (
        <div className="flex flex-col items-center justify-center">
          <Loader className="animate-spin" />
          <p>Verifying your account...</p>
        </div>
      ) : (
        <>
          <FormError message={error} />
          <FormSuccess message={success} />
        </>
      )}
    </CardWrapper>
  );
};
