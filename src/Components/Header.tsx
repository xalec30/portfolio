export default function Header() {
    return (
        <header className="hero">
            <section className="hero is-halfheight pt-4 pb-4">
                <div className="hero-body p-5">
                    <div className="columns">
                        <div className="column is-three-fifths is-align-content-center">
                            <h1 className="title is-1">
                                Hola, soy
                            </h1>
                            <h2 className="subtitle is-3">
                                Desarrollador Frontend
                            </h2>
                            <p className="buttons">
                                <button className="button">
                                    <span className="icon">
                                    <i className="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </button>
                                <button className="button is-primary">
                                    <span className="icon">
                                    <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>@jgthms</span>
                                </button>
                                <button className="button is-success">
                                    <span className="icon is-small">
                                    <i className="fas fa-check"></i>
                                    </span>
                                    <span>Save</span>
                                </button>
                                <button className="button is-danger is-outlined">
                                    <span>Delete</span>
                                    <span className="icon is-small">
                                    <i className="fas fa-times"></i>
                                    </span>
                                </button>
                                </p>
                        </div>
                        <div className="column is-align-content-center">
                            <figure className="image">
                                    <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/256x256.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}