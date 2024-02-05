import AuthPage from '../AuthPage';
import './Register.css';

function Register({isSending}) {
    return <AuthPage isLogginPage={false} isSending={isSending} />
  }
  
export default Register;