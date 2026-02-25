

export default function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-3">Welcome Back</h3>
            <p className="text-center text-muted mb-4">
              Please login to continue
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter username"
                  required
                />
                <div className="form-text">
                  Username must be at least 4 characters.
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}