import { useState, FormEvent, FormEventHandler } from "react";

export default function useAuthentication(
  values: any,
  initErrors: () => void
): [FormEventHandler<HTMLFormElement>, FormEventHandler<HTMLFormElement>, boolean] {
  const [error, setError] = useState(false);

  async function onSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false)
    initErrors();
    const res = await fetch("https://apingweb.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.identifier,
        password: values.password,
        // expiresInMins: 60, // optional
      }),
    });

    const user = await res.json();
    if (user.success === false) setError(true);
  }

  async function onSignUp(e: React.FormEvent<HTMLFormElement>) {
    setError(false);
    e.preventDefault();
    initErrors();
    const res = await fetch('https://apingweb.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.nombre + " " + values.apellido,
        email: values.email,
        phone:"5555551234",
        password: values.password,
        password_confirmation: values.password
    })
    })

    const user = await res.json();
    if (user.success === false) setError(true);
  };
  return [onSignIn, onSignUp, error];
}
