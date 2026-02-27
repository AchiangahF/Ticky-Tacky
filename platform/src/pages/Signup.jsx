import { useNavigate } from "react-router-dom"
import { useState } from "react";

import Bg_Auth from "../assets/Bg_Auth.jpg"

export default function Signup() {

  const navigate = useNavigate();


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4">
        <div className="card shadow-lg p-4">

          <div className="bg-dark pt-4 pb-2 rounded mb-3" style={{background:`linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${Bg_Auth})`}}>>
            <h3 className="text-center mb-4 text-light">Create Account</h3>
          </div>

          <hr />

          {step === 1 && (
            <form onSubmit={nextStep}>
              <div className="mb-3">
                
                <input
                  type="text"
                  className="px-1 py-2 w-100 mb-2"
                  style={{border:"none", borderBottom:"2px solid rgb(166, 74, 247)", outline:"none"}}
                  name="username"
                  placeholder="username"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                
                <input
                  type="password"
                  className="px-1 py-2 w-100"
                  style={{border:"none", borderBottom:"2px solid rgb(166, 74, 247)", outline:"none"}}
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                
                <input
                  type="password"
                  className="px-1 py-2 w-100 mb-3"
                  style={{border:"none", borderBottom:"2px solid rgb(166, 74, 247)", outline:"none"}}
                  placeholder="confirm password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Upload Profile Picture (Optional)
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                />
                <div className="form-text">
                  You can skip this step if you want.
                </div>
              </div>

              <button type="submit" className="btn btn-success w-100 mb-2">
                Finish Signup
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={() => setStep(1)}
              >
                Back
              </button>
            </form>
          )}

        </div>
        <p className="pt-3 px-2 text-secondary">don't have an account ? <span className="px-4 fw-bold text-primary float-end" style={{cursor:"pointer"}} onClick={() => navigate("/login")}>Login</span></p>
      </div>
      
    </div>
  );
}