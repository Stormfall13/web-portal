import { useState } from "react";
import Button from "./Button";

type LoginFormProps = {
  onSubmit: (
    email: string,
    password: string
  ) => void;
};

export default function LoginForm({
  onSubmit
}: LoginFormProps){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit(email, password);
    }}>
      <input 
      type="email" 
      onChange={(event) => setEmail(event.target.value)} 
      value={email}
      aria-label="Email"/>
      <input 
      type="password" 
      onChange={(event) => setPassword(event.target.value)}
      value={password}
      aria-label="Password"/>
      <Button type="submit">Login</Button>
    </form>
  )
};