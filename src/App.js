import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="novoapp">
      <nav class="navbar navbar-expand-lg navbar-dark bg-none">
        <div class="container-fluid">
          <a class="navbar-brand px-2" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item" id="lista">
                <a class="nav-link " aria-current="page" href="#">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Adotar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Doações</a>
              </li>
            </ul>
            <span class="navbar-text">
              <a class="nav-link" href="#">Login</a>
            </span>
          </div>
        </div>
      </nav>
      <main>
        <div id="services-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="main-tittle pt-5">Meu nome é Banguela</h3>
              </div>
              <div className="col-sm-6 service-box">
                <img src="https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png" width="560"></img>
              </div>
              <div className="col-sm-6 service-box ">
                <h4>Aplicações</h4>
                <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
              </div>
              <div class="col-md-8 service-box pt-2">
                <img src="https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png" width="100"></img>
              </div>
              <div className="col-3 pt-4">
                <button type="button" class="btn btn-lg">Quero Adotar</button>
              </div>
              <div className="d-flex pt-5" id="infos">
                <div className="col-md-4 service-box ">
                  <li>
                    <h5> Meus Dados</h5>
                  </li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                </div>
                <div className="col-md-5 service-box ">
                  <li>
                    <h5> Minha personalidade</h5>
                  </li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                </div>
                <div className="col-md-4 service-box">
                  <li>
                    <h5> Minhas Caracteristicas</h5>
                  </li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                  <li className="px-3">teste</li>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>

  );
}

export default App;
