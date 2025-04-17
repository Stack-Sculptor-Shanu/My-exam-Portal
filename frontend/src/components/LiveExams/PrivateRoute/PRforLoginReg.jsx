import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PRforLoginReg = ({ children }) => {
  const examId = Cookies.get('loginstatus');
  return !examId ? children : <Navigate to="/" />;
};

export default PRforLoginReg;
