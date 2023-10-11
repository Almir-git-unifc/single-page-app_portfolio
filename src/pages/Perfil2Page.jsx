import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Perfil2Page = () => {
  const imgUrl = new URL('../assets/img/3d00854.png', import.meta.url);
  return (
    <>
      <h2>Perfil-2 Page</h2>
      <div className='page-perfil2'>
        <div className='header'>
          <h3 className='FontH3'>Perfil</h3>
          <p>Estudante de tecnolgias de desenvolvimento de softwares.</p>
          <img
            className='card-img-top img-card img-ft-perfil2'
            src={imgUrl}
            alt='Card image cap'
          ></img>
        </div>

        <div className='corpo-perfil2'>
          <div className='about-perfil2'>
            <h3 className='FontH3'>Sobre mim</h3>
            <p>
              I am student Neque porro quisquam est qui dolorem ipsum quia
              dolor sit amet, consectetur, <br /> adipisci velit... Não há quem
              goste de dor, que a procure e a queira ter, simplesmente porque é
              dor...
            </p>
          </div>
          
          <div>
            <h3 className='detail-perfil-2'>Detalhes</h3>
            <span className='nomidaloc-perfil2'>Nome:</span>
            <p>Silver</p>
            <span className='nomidaloc-perfil2'>Idade: </span>
            <p>25 anos</p>
            <span className='nomidaloc-perfil2'>Localização:</span>
            <p>Santa Tereza - ES</p>
          </div>

          <div className='footer footer-perfil2'>
            <div className='redes-sociais'>
              <h3 className='titleRedesSoc FontH3'>Siga-nos</h3>

              <div className='redesListaIcons'>
                <FaFacebook className='ico-perfil2' size={30} color='#0f4b9b' />

                <FaTwitter
                  className='ico-perfil2'
                  size={30}
                  color='#0f4b9b'
                  style={{ marginLeft: 10 }}
                />

                <FaInstagram
                  className='ico-perfil2'
                  size={30}
                  color='#0f4b9b'
                  style={{ marginLeft: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Perfil2Page
