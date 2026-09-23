import { useState } from "react";
import Button from "./Button";

import styles from "./LoginForm.module.css";

type LoginFormProps = {
  onSubmit: (
    email: string,
    password: string
  ) => void;
  isLoading?: boolean;
};

export default function LoginForm({
  onSubmit,
  isLoading = false,
}: LoginFormProps){

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  

  return (
    <form 
    className={styles.form} 
    onSubmit={(event) => {
      event.preventDefault();

      let hasError = false;

      if (email === "") {
        setEmailError("Email is required");
        hasError = true;
      }

      if (password === "") {
        setPasswordError("Password is required");
        hasError = true;
      }

      if (hasError) {
        return;
      }

      if (isLoading) {
        return;
      }
      
      onSubmit(email, password);
    }}>
      <div className={styles.wrapper__input}>
        <label htmlFor="email" className={styles.label__input}>Email</label>
          <input
          className={`${styles.input} ${emailError ? styles.input__err : ""}`}
          type="email" 
          onChange={(event) => {
            setEmail(event.target.value);
            setEmailError("")
          }} 
          value={email}
          id="email"
          aria-describedby={emailError ? "email-error" : undefined}
          />
          {emailError && (
            <span id="email-error" className={styles.error}>{emailError}</span>
          )}
        <label htmlFor="password" className={styles.label__input}>Password</label>
          <input
          className={`${styles.input} ${passwordError ? styles.input__err : ""}`} 
          type="password" 
          onChange={(event) => {
            setPassword(event.target.value)
            setPasswordError("")
          }}
          value={password}
          id="password"
          aria-describedby={passwordError ? "password-error" : undefined}
          />
          {passwordError && (
            <span id="password-error" className={styles.error}>{passwordError}</span>
          )}
        <Button 
          className={styles.button__login} 
          type="submit"
          disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
      </div>
    </form>
  )
};