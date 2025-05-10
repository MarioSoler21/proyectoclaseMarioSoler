import { GrUser } from "react-icons/gr";

function TopNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <span className="navbar-brand">Mi aplicación de L; LALALA</span>
        <div className="dropdown ms-auto">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown">
         
          
            <GrUser className="me-2" /> Usuario
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">Per
                
              </button>
            </li>
            <li>
              <a className="dropdown-item" href="#">Cerrar Sesion
              </a>
              <a className="dropdown-item" href="#">pop
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
