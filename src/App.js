// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Navbar"/>
      <div className="container">
        <TextForm title="This is form"/>
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
