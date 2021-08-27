import logo from './logo.svg';
import './App.css';
import CarouselContainer from './component/CarouselContainer';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className = "App">
      <switch>
        <Route exact path = "/" component={CarouselContainer} /> 
      </switch>
    </div>
  
  );
}

export default App;
