import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authenSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dasboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, Password }));
  };

  return (
    <div className="page LoginUser-page ">
      <div>
        <div className="col col-LoginUser mx-auto mt-7">
          <span className="login100-form-title">
            SISTEM INFORMASI MANAJEMEN INVENTARIS
          </span>
          <div className="text-center">
            <img
              src="https://tik.unsri.ac.id/img/logo.png"
              className="header-brand-img"
              alt=""
            />
          </div>
        </div>
        <div className="container-login100">
          <div className="wrap-login100 p-0">
            <div className="card-body">
              <form onSubmit={auth}>
                {isError && <p className="has-text-centered">{message}</p>}
                <span className="login100-form-title">Silahkan Login...</span>
                <div
                  className="wrap-input100 validate-input"
                  data-bs-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Email"
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="zmdi zmdi-email" aria-hidden="true"></i>
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-bs-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="pass"
                    placeholder="Password"
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text-end pt-1"></div>
                <div className="container-login100-form-btn">
                  <button
                    type="submit"
                    className="login100-form-btn btn-primary"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
