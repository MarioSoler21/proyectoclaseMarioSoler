import { Button } from "bootstrap";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ height: '100vh' }}
    >
      <div className="card p-4" style={{ width: '300px' }}>
        <h2 className="text">Iniciar Sesion</h2>
        <form onSubmit={() => { }}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Ingrese Correo"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-primary w-100" 
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
