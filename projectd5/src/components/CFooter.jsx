import React from 'react'

const CFooter = () => {
  return (
    <footer className="footer text-center bg-black p-4 text-secondary">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-6 mb-4">
            <h5>Informazioni</h5>
            <ul className="list-unstyled">
              <li>Il nostro azienda</li>
              <li>Carriere</li>
              <li>Responsabilità</li>
              <li>Operazioni Commerciali</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h5>Supporto</h5>
            <ul className="list-unstyled">
              <li>Centro assistenza</li>
              <li>Termini di uso</li>
              <li>Privacy</li>
              <li>Informativa sui cookie</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h5>Connessione</h5>
            <ul className="list-unstyled">
              <li>Contattaci</li>
              <li>Connessione con i social</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <h5>App</h5>
            <ul className="list-unstyled">
              <li>Scarica l'app</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <p>&copy; 2023 Netflix, Inc. | Privacy | Termini</p>
      </div>
    </footer>
  )
}

export default CFooter
