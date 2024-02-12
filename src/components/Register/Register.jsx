import { Navigate } from "react-router-dom";
import AuthPage from "../AuthPage";
import "./Register.css";

function Register({ isSending, isLoggedIn, onRegister }) {
  function handleSubmit(values) {
    onRegister({
      name: values.name,
      password: values.password,
      email: values.email,
    });
  }

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <AuthPage
      isLogginPage={false}
      isSending={isSending}
      onSubmit={handleSubmit}
    />
  );
}

export default Register;
