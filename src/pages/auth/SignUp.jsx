import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../validation/formValidation";
import SignUpImage from "../../assets/undraw_signup.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5171/api/User/SignUp", data);

      if (response.status === 200) {
        console.log("User created successfully:", response.data);
        alert("User created successfully!");
        navigate("/signin");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        alert(`Error: ${error.response.data}`);
      } else {
        console.error("Error during sign up:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center duration-300">
        <div
          className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2 duration-300"
          style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
        >
          {/* sign up form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12 duration-300"
          >
            <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
              Sign Up
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
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.email?.message}
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

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.confirmPassword?.message}
              </p>
            </div>

            {/* Role Selection */}
            <div className="w-full">
              <select
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                name="role"
                id="role"
                {...register("role")}
                defaultValue="User"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.role?.message}
              </p>
            </div>

            <button
              type="submit"
              className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
            >
              Sign Up
            </button>

            <div className="flex flex-col items-center">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="condition"
                  id="condition"
                  {...register("iAgree")}
                />
                <p>
                  I agree to all{" "}
                  <span className="text-blue-600">
                    <a href="/termsconditions">Terms and Conditions</a>
                  </span>
                </p>
              </div>
              <p className="text-xs lg:text-sm text-red-600 font-semibold">
                {errors.iAgree?.message}
              </p>
            </div>
          </form>

          {/* sign up image */}
          <div className="flex flex-col justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6 duration-300">
            <img className="w-11/12" src={SignUpImage} alt="sign up Image" />
            <p className="font-normal">
              Already a Member?{" "}
              <span className="text-blue-600">
                <a href="/signIn">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
