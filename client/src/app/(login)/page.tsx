"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const schemaFormZod = z.object({
  email: z
    .string()
    .min(2, { message: "It must have more than 2 characters." })
    .email("This not email valid."),
  password: z
    .string()
    .min(8, { message: "It must have more than 8 characters." }),
});

type FormValues = z.infer<typeof schemaFormZod>;

export default function Login() {
  const { replace } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schemaFormZod),
  });

  async function handleAuth(data: FormValues) {
    const validateDatas = schemaFormZod.parse(data);

    if (validateDatas) {
      setIsLoading(true);
      try {
        await signIn("credentials", {
          email: validateDatas.email,
          password: validateDatas.password,
          redirect: false,
        })
          .then((res) => {
            setIsLoading(false);
            if (res?.error) {
              console.error(res.error);
              return;
            }
            replace("/cms");
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[2.4rem] text-center">SingIn </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleAuth)}
        >
          <FormField
            control={form.control}
            {...form.register("email")}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            {...form.register("password")}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div>
            <Input className="w-[20rem]" {...register("email")} />
          </div>
          <div>
            <Input
              id="outlined-basic"
              className="w-[20rem]"
              type="password"
              {...register("password")}
            />
          </div> */}
          {isLoading ? (
            <Button disabled>
              Please wait
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button type="submit">Logar</Button>
          )}
        </form>
      </Form>
    </div>
  );
}
