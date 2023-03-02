import { StudentProvider } from '../../contexts/StudentProvider';
import Student from '../student/Student';
import './App.css';

const App = () => {
  return <StudentProvider>
    <Student></Student>
  </StudentProvider>;
}

export default App;
