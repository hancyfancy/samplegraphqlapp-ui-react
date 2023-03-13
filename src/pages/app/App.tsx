import SearchBar from '../../components/search/SearchBar';
import { SearchProvider } from '../../contexts/SearchProvider';
import { StudentProvider } from '../../contexts/StudentProvider';
import Student from '../student/Student';
import './App.css';

const App = () => {
  return <SearchProvider>
    <SearchBar></SearchBar>
  </SearchProvider>;
}

export default App;
