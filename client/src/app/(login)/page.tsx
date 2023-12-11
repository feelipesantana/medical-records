"use client";
import { Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";

const schemaFormZod = z.object({
  email: z.string().nonempty("Username não pode estar vazio"),
  password: z.string().nonempty("Senha não pode estar vazio"),
});

type FormValues = z.infer<typeof schemaFormZod>;

export default function Login() {
  const { handleSubmit, register } = useForm<FormValues>();
  const { replace } = useRouter();

  async function handleAuth(data: FormValues) {
    const validateDatas = schemaFormZod.parse(data);

    if (validateDatas) {
      // setIsLoading(true);
      console.log(validateDatas);
      const result = await signIn("credentials", {
        email: validateDatas.email,
        password: validateDatas.password,
        redirect: false,
      });

      if (result?.error) {
        console.log(result);
        return;
      }
      replace("/cms");
      console.log(result);
    }
    // if (result?.error) {
    //   setIsLoading(false);
    //   setError(true);
    //   addToast({
    //     success: false,
    //     title: "Ops, algo deu errado",
    //     subtitle: "Verifique os dados que você inseriu e tente outra vez.",
    //   });
    // } else {
    //   localStorage.removeItem("@spott:language");
    //   setError(false);
    //   push(`/${lang}/resume`);
    // }
  }
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[2.4rem] text-center">SingIn </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleAuth)}>
        <TextField
          id="outlined-basic"
          label="email"
          size="medium"
          variant="outlined"
          className="w-[20rem]"
          {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="password"
          size="medium"
          variant="outlined"
          className="w-[20rem]"
          type="password"
          {...register("password")}
        />

        <Button variant="contained" className="bg-blue-default" type="submit">
          Logar
        </Button>
      </form>
    </div>
  );
}
