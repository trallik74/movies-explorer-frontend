import AuthPage from "../AuthPage";
import "./Login.css";

function Login({isSending}) {
  return <AuthPage isLogginPage={true} isSending={isSending}/>;
}

export default Login;
