export default function Navbar() {

    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
          
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Acerca de Mi
                    </a>
                    <a className="navbar-item">
                        Experiencia Laboral
                    </a>
                    <a className="navbar-item">
                        Proyectos 
                    </a>
                    
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-light">
                                Thema
                            </button>
                            <button className="button is-primary">
                                Idioma
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}