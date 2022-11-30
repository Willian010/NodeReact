 export function Login() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Precios</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Stock</a>
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" >Buscar Cliente</button>
          
        </form>
        <div>
            <a href="#" ><img className="img-logo" src="https://cdn-icons-png.flaticon.com/512/2172/2172518.png"/></a>
        </div>
        <div >
        </div> 
      </div>
    </div>
  </nav>
        </header>
      </div>
    );

  }

 ;
  /*
 export const Login = () => {
    return( 
        <h1>
            hola como va
        </h1>
    )
 }*/