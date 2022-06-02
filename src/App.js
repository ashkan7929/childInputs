import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import formData from './form.json'

function App() {
  return (
    <div className="App">
      <Form formData={formData} />
    </div>
  );
}

export default App;
