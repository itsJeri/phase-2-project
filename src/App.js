import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



import MainNav from './components/MainNav';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className='App'>
        <MainNav/>
        <MainPage/>
    </div>
  );
}

export default App;
