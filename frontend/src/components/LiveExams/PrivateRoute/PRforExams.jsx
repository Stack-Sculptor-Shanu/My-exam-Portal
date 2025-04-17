import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PRforExam = ({ children }) => {
  const examId = Cookies.get('examID');
  return examId ? children : <Navigate to="/" />;
};

export default PRforExam;
