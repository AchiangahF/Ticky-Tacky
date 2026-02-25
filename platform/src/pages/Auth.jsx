
import { useState } from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login /> : <Signup />}
      
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create Account" : "Already have an account?"}
      </button>
    </div>
  );
}