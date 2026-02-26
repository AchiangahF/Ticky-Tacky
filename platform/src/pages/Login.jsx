import { useNavigate } from "react-router-dom"
import Bg_Auth from "../assets/Bg_Auth.jpg"

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          
          <div className="card shadow-lg p-4">

            <div className="pt-4 mb-3 rounded" style={{background:`linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${Bg_Auth})`}}>
              <h3 className="text-center mb-3 text-light">Welcome Back</h3>
              <p className="text-center mb-4 text-light">
              Please login to continue
            </p>
            </div>

            <hr />

            <form>
              <div className="mb-3">
               
                <input 
                  type="text" 
                  className="px-1 py-2 w-100 mb-3" 
                  placeholder="Enter username"
                  required

                  style={{border:"none", borderBottom:"2px solid rgb(166, 74, 247)", outline:"none"}}
                />
                
              </div>

              <div className="mb-4">
                
                <input 
                  type="password" 
                  className="px-1 py-2 w-100 mb-2" 
                  placeholder="Enter password"
                  required

                  style={{border:"none", borderBottom:"2px solid rgb(166, 74, 247)", outline:"none"}}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" onClick={() => navigate("/dashboard") }>
                Login
              </button>
            </form>
          </div>
          
          <p className="pt-3 px-2 text-secondary">don't have an account ? <span className="px-4 fw-bold text-primary float-end" style={{cursor:"pointer"}} onClick={() => navigate("/signup")}>Sign up</span></p>

        </div>
      </div>
    </div>
  );
}