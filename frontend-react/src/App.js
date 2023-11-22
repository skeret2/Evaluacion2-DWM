import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexProductos from './productos/IndexProductos';
import Create from './productos/Create';

function App() {
  return (
    <div className="App">
      <Create/>
      <IndexProductos/>
    </div>
  );
}

export default App;
