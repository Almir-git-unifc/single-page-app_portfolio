import 'bootstrap/dist/css/bootstrap.min.css';



const UserPage = () => {
  const imgUrl = new URL('../assets/img/3d00854.png', import.meta.url)
  return (
    <>
      <h2> Page Perfil 1</h2>

      <div className='card border-primary bg-card bg-card-perfil-1'>
        <div className='card-header '>
          <img
            className='card-img-top img-card img-perf1'
            src={imgUrl}
            alt='Card image cap'
          ></img>
        </div>

        <div className='card-body'>
          <h3 className='card-title'>Juan Cleriston</h3>
          <p className='card-text'>
            I am Software Architect working on various <br /> technologies and
            trying to solve problems.
          </p>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item info-inputfield-card'>Experience: 15 years</li>
            <li className='list-group-item info-inputfield-card'>Age: 99</li>
            <li className='list-group-item info-inputfield-card'>Occupation: blah blah blah</li>
          </ul>
          <a href='#' className='btn btn-primary btn-info-card'>
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

export default UserPage
