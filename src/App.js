import logo from './logo.svg';
import './App.css';
import ResumeApp from './components/resume-app/ResumeApp';
import pic from './nature.jpg'

function App() {
  return (
    <div className="App">
      <img src={pic} className="App-pic" alt='pic'/>
      <ResumeApp/>
    </div>
  );
}

export default App;
