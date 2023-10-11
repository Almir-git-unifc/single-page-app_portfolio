import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HomePage = () => {
  const imgUrl1 = new URL('../assets/img/abs_545904.png', import.meta.url);
  return (
    <>
      <h2>Home Page</h2>
      <div className=' bg-gradient-dark aboutPage linear-background'>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container'>
              <ul className='navbar-nav '>
                <li>
                  <Link className='navbar-brand logomarkbrand'>
                    <img src={imgUrl1} alt='imageBrand'></img>
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link my-link linksAbout link-portif-navbar'
                    exact
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link my-link linksAbout link-portif-navbar'
                    exact
                  >
                    Sobre
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link my-link linksAbout link-portif-navbar'
                    exact
                  >
                    Perfil-2
                  </Link>
                </li>
              </ul>
              <button className='btn btn-per2-about btn-lg' type='button'>
                Contato
              </button>
            </div>
          </nav>
        </div>

        <div className='container-text texto-esquerdo'>
          <div className='text'>
            <h4>Olá pessoal</h4>
            <h2>
              Eu sou <span className='spanEstilo'>Silva, o Desenvolvedor de software</span>
            </h2>
            <p>
              Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at,
              dui. In rutrum. Sed ac dolor sit amet purus malesuada congue.{' '}
              <br /> In laoreet, magna id viverra tincidunt, sem odio bibendum
              justo,
            </p>
            <div className='redes-sociais'>
              <h3 className='titleRedesSoc'>Siga-nos</h3>

              <div className='redesListaIcons'>
                <FaFacebook size={30} color='#0f4b9b' />

                <FaTwitter
                  size={30}
                  color='#0f4b9b'
                  style={{ marginLeft: 10 }}
                />

                <FaInstagram
                  size={30}
                  color='#0f4b9b'
                  style={{ marginLeft: 10 }}
                />
              </div>
              <button className='btn btn-per2-about btn-lg' type='button'>
                Sobre mim
              </button>
            </div>
          </div>
        </div>

        <div className='Footdown'>
          <h4>fontes</h4>
          <p className='p-colabor'>Google Fonts</p>
          <p className='p-colabor'>SocialMedia: react-icons</p>
          <p className='p-colabor'>
            Class Perfil 2:<Link to='https://www.youtube.com/watch?v=Hk-BwDupvT8&list=LL&index=1' target='_blank'>{""} by: Prof Miltin</Link>
          </p> 
          <p className='p-colabor'>
            Class Home Page:<Link to='https://www.youtube.com/watch?v=TGSwi2h8OXs' target='_blank'>{""} by: Danilo-jesus</Link>
          </p> 
          <p>         
          Icon Brand and Background image: <Link to="https://freepik.cdnpk.net/img/og-fb-logo-en.png?v=2" target='_blank'>Freepik</Link>
          </p>
          <p className='p-colabor'>
            Background img programmer:{' '}
            <Link to="https://www.vecteezy.com/vector-art/4578621-programmer-working-on-computer" target='_blank'>
              Icon by Vecteezy
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default HomePage
