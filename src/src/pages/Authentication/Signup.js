import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import signup from "../../assests/signup.json"
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signup,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  useEffect(() => {
    const errorMsg = error || gError || updateError;
    if (errorMsg) {
      switch (errorMsg?.code) {
        case "auth/email-already-in-use":
          toast.error(
            "This Email is already in use! Please provide another Email"
          );
          break;

        default:
          toast("something went wrong");
      }
    }
  }, [error, gError, updateError]);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <h3>Loading...</h3>;
  }

  // if (user || gUser) {
  //   toast.success("User Created Successfully");
  //   navigate("/");
  // }
  const [token] = useToken(user || gUser)

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  const onSubmit = async (data, e) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log(data);
  };

  return (
    <div className="d-lg-flex col justify-content-evenly align-items-center mt-5 py-4">
      <div className="d-flex row justify-content-center align-items-center my-4 py-4">
        <Lottie
          className=""
          options={defaultOptions}
          height={500}
          width={500}
        />
      </div>
      <div className="my-5 p-4 text-center row justify-content-center align-items-center">
        <div className="flex h-screen w-full justify-center items-center my-5 border-1 shadow-lg ">
          <div className="card w-full justify-content-center mx-auto border-0 ">
            <div className="card-body border-0 ">
              <h2 className="text-center text-2xl font-bold text-success fw-bold">
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full border-0 ">
                  <label className="label">
                    <span className="label-text fs-4">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control w-full mx-auto"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* Email */}
                <div className="form-control w-full max-w-xs border-0 ">
                  <label className="label">
                    <span className="label-text fs-4">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control w-full mx-auto"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    for="exampleInputEmail1"
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
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* Password */}
                <div className="form-control w-full border-0 ">
                  <label className="label">
                    <span className="label-text fs-4">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control w-full mx-auto"
                    id="exampleInputPassword1"
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
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn btn-outline btn-info w-full max-w-xs mb-4 fs-5"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <p>
                <small className="fs-5">
                  Already have an account?
                  <Link
                    className="text-primary mx-2 text-decoration-none"
                    to="/login"
                  >
                    Please login
                  </Link>
                </small>
              </p>
              <div class="divider">
                <span></span>
                <span>OR</span>
                <span></span>
              </div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline-success d-flex justify-center mx-auto"
              >
                Continue with Google
                <FcGoogle className="w-6 h-7 ml-3"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
