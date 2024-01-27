import './App.css';
import Sidebar from './Components/Functionality/Sidebar';
import Navbar from './Components/Functionality/Navbar';
import MainBody from './Components/Functionality/MainBody';
import DashBoard from './Components/Functionality/Dashboard';
import Data from './data.json';

function App() {
  return (
    <div className="container">
      <Navbar Data={Data}/>
      <div className="container-body">
        <Sidebar Data={Data}/>
        <MainBody Data={Data}/>
      </div>
    </div>
  );
}

export default App; 