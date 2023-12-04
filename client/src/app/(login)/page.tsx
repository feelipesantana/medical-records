"use client";
import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[2.4rem] text-center">SingIn </h1>
      <form className="flex flex-col gap-4">
        <TextField
          id="outlined-basic"
          label="Usuário"
          size="medium"
          variant="outlined"
          className="w-[20rem]"
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          size="medium"
          variant="outlined"
          className="w-[20rem]"
        />

        <Button variant="contained" className="bg-blue-default">
          Logar
        </Button>
      </form>
    </div>
  );
}
