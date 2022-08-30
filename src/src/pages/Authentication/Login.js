import React, { useEffect, useRef } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import login from "../../assests/login.json";
import Loading from "../shared/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || gUser)

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])


  useEffect(() => {
    const errorMsg = error || gError;
    if (errorMsg) {
      switch (errorMsg?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;

        case "auth/wrong-password":
          toast("Wrong Password");
          break;

        case "auth/user-not-found":
          toast("User Not Found");
          break;

        default:
          toast("something went wrong");
      }
    }
  }, [error, gError]);

  if (loading || gLoading) {

    return (
      <Loading />
    );
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.info("Email Sent 😃");
    } else {
      toast.error("Please Enter Your Email address");
    }
  };


  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    // reset({});
  };

  // if (user || gUser) {
  //   navigate('/')
  // }

  return (
    <>
      <div className="d-lg-flex justify-content-evenly align-items-center mt-5">
        <div className="d-flex row justify-content-center align-items-center mb-3 mx-5 my-5 py-4">
          <Lottie
            className="mx-3 mb-3 my-5"
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
        <div className="login border-0 my-5 mt-5">
          <div className="my-5 p-4 text-center w-full border-1 shadow-lg mx-auto my-3 d-flex justify-content-center align-item-center mt-5">
            <div className="flex h-screen justify-center items-center border-0">
              <div className="card border-0">
                <div className="card-body border-0">
                  <h2 className="text-center text-success text-2xl font-semibold">Login</h2>
                  <form className="border-0" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div className="form-control w-full border-0">
                      <label className="label">
                        <span className="label-text text-lg">Email</span>
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                          },
                        })}
                        // ref={emailRef}
                        type="email"
                        placeholder="Your Email"
                        className="form-control w-full mx-auto"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        for="exampleInputEmail1"
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-red-600">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>

                    {/* Password */}
                    <div className="form-control w-full border-0">
                      <label className="label">
                        <span className="label-text text-lg">Password</span>
                      </label>
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be 6 characters or longer",
                          },
                        })}
                        type="password"
                        placeholder="Password"
                        className="form-control w-full mx-auto"
                        id="exampleInputPassword1"
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="label-text-alt text-red-600">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <input
                      className="btn bg-cyan-500 px-4 mb-3 border-0 text-white"
                      type="submit"
                      value="Login"
                    />
                  </form>
                  <p className="text-danger fs-5">
                    Forget Password?
                    <button
                      className="btn btn-link text-decoration-none b-0 fs-5"
                      onClick={resetPassword}
                    >
                      Reset Password
                    </button>
                  </p>
                  <p>
                    <small className="fs-5">
                      New To Ticket-Kato?
                      <Link
                        className="text-primary mx-2 text-decoration-none"
                        to="/signup"
                      >
                        Create New Account
                      </Link>
                    </small>
                  </p>
                  <div class="divider">
                    <span></span>
                    <span>OR</span>
                    <span></span>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline-success d-flex justify-center mx-auto"
                    >
                      Continue With Google
                      <FcGoogle className="w-6 h-7 ml-1"></FcGoogle>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
