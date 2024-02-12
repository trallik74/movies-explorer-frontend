import { Navigate } from "react-router-dom";
import AuthPage from "../AuthPage";
import "./Login.css";

function Login({ isSending, isLoggedIn, onLogin }) {
  function handleSubmit(values) {
    onLogin({ password: values.password, email: values.email });
  }

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <AuthPage
      isLogginPage={true}
      isSending={isSending}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
