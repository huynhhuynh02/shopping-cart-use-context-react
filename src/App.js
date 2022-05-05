import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routers/router';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          {
            routes.map((router, key) => (
                <Route key={key}  path={router.path} index exact element={router.element} />
            ))
          }        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
