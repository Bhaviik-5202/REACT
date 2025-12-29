function First() {
  let tital = "Darshan University";
  let cls = "B-Batch1";
    const img =
    "https://talent500.com/blog/wp-content/uploads/sites/42/2023/08/0_y6IcBe5J1AdALzXw.png";
    const firstCSS = {
        backgroundColor : '#05445E',
    }
  return (
    <>
      <div className="card" style={firstCSS}>
        <h3>Componts A</h3>
        <Child1 tital={tital} cls={cls} img={img}/>
      </div>
    </>
  );
}

function Child1(props) {
    const child1CSS = {
        backgroundColor : '#189AB4',
    }
  return (
    <>
      <div className="card" style={child1CSS}>
      <h3>Componts B1</h3>
        <Child2 tital={props.tital} cls={props.cls} img={props.img}/>
      </div>
    </>
  );
}

function Child2(props) {
    const child2CSS = {
        backgroundColor : '#75E6DA',
    }
    return (
    <>
      <div className="card" style={child2CSS}>
      <h3>Componts B2</h3>
        <Child3 tital={props.tital} cls={props.cls} img={props.img}/>
      </div>
    </>
  );
}
function Child3(props) {
    const child3CSS = {
        backgroundColor : '#D4F1F4',
    }
    return (
    <>
      <div className="card" style={child3CSS}>
      <h3>Componts B3</h3>
        <Card tital={props.tital} cls={props.cls} img={props.img}/>
      </div>
    </>
  );
}
function Card(props) {
    const inlineStyles = {
    height : '250px',
    weight : '2 0px',
    backgroundColor: '#7EC8E3',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <>
      <div className="card">
      <h3>Componts C</h3>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div class="card-body">
          <h5 class="card-title">{props.tital}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
          <hr />
          <img src={props.img} className="card-img-top" style={inlineStyles}/>
        </div>
      </div>
    </>
  );
}
export default First;
