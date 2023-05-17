import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Nav';
import ShoppingListApp from "./shoppingListApp";
import { LandingPage } from './LandingPage';
import { RegisterForm} from './Forms/register';
import { LoginForm } from './Forms/login';

function App() {
  return (
    <div className='display_app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route exact path='landingpage' element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} /> 
          <Route path="register" element={ <RegisterForm/>} />
          <Route path='/shoppinglistapp' element={<ShoppingListApp />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
