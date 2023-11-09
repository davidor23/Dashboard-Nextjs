"use client";
import { useState } from "react";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, setState] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const result = await authenticate(undefined, formData); // Call the authenticate function with the form data
    setState(result); // Update the state with the result of the authentication
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {" "}
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
        {state && <p className={styles.errorMessage}>{state}</p>}
      </form>
      <p className={styles.contactMessage}>
        For access, please contact{" "}
        <a href="mailto:david.o.reilly@outlook.com">David O Reilly</a>.
      </p>
    </div>
  );
};

export default LoginForm;
