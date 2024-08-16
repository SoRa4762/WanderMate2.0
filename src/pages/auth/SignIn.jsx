import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../validation/formValidation";
import axios from "axios";
import SignInImage from "../../assets/undraw_signin.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = async (data) => {
    try {
      const responseData = await axios.post(
        "http://localhost:5171/api/Auth/SignIn",
        data
      );
      if (responseData.status === 200) {
        const { token, expiresIn, role } = responseData.data.response; // Access nested 'response' object
        console.log("Response Data:", responseData.data);

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
        localStorage.setItem('role', role);
        setUser({ role }); // Update user state with role

        console.log("Role:", role); 
        console.log("Expires In:", expiresIn);
        navigate(role === "Admin" ? "/dashboard" : "/user/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center duration-300">
      <div
        className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2 duration-300"
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12 duration-300"
        >
          <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
            Sign In
          </h1>

          <div className="w-full">
            <input
              className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              {...register("username")}
            />
            <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
              {errors.username?.message}
            </p>
          </div>

          <div className="w-full">
            <input
              className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              {...register("password")}
            />
            <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
              {errors.password?.message}
            </p>
          </div>

          <div className="flex gap-2 justify-start w-full">
            <input
              type="checkbox"
              name="condition"
              id="condition"
              {...register("remember")}
            />
            <p>Remember Me</p>
          </div>

          <button
            type="submit"
            className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
          >
            Sign In
          </button>

          <p className="font-normal">
            New Here?{" "}
            <span className="text-blue-600">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </form>

        <div className="flex flex-col justify-start sm:justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6 duration-300">
          <img className="w-11/12" src={SignInImage} alt="Sign In Image" />
          <p>Or sign in with .... ....</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
