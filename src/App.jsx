import { ApplicationRoutes } from './pages/ApplicationRoutes';
import { Link } from 'react-router-dom';
import './App.css'




function App () {
  return (
    <>
      <div>
        <h1>SPA Study</h1>
      </div>
      <div>
        <ul className='links'>
          <li>
            <Link to='/' className='my-link' exact>
              Home
            </Link>
          </li>

          <li>
            <Link to='/user' className='my-link' exact>
              Perfil 1
            </Link>
          </li>

          <li>
            <Link to='/perf2' className='my-link' exact>
              Perfil 2
            </Link>
          </li>         

        </ul>
        <ApplicationRoutes />
      </div>
    </>
  )
}

export default App
