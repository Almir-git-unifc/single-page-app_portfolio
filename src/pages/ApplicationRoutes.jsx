import { Route, Routes } from 'react-router-dom';
import  HomePage from './HomePage';
import  UserPage from './UserPage';
import  Perfil2Page from './Perfil2Page';


export const ApplicationRoutes = () => (
  <Routes>
    <Route exact path='/' element={<HomePage />}></Route>
    <Route exact path='/user/' element={<UserPage />}></Route>
    <Route exact path='/perf2/' element={<Perfil2Page />}></Route>
  </Routes>
)
