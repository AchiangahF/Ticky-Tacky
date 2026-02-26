import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Signup() {
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

          <h3 className="text-center mb-4">Create Account</h3>

          {step === 1 && (
            <form onSubmit={nextStep}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
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
      </div>
    </div>
  );
}