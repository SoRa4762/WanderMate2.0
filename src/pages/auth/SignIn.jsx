import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../validation/formValidation";
import SignInImage from "../../assets/undraw_signin.svg";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
                // onChange={handleChange}
                // value={signInValues["username"]}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.username?.message}
              </p>
            </div>

            {/*if you add eye button, make sure to turn the type to text and back */}
            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                {...register("password")}
                // value={signInValues["password"]}
                // onChange={handleChange}
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
                // value={signInValues["condition"]}
                // onChange={handleChange}
              />
              <p>Remember Me </p>
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

          {/* sign up image */}
          <div className="flex flex-col justify-start sm:justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6 duration-300">
            <img className="w-11/12" src={SignInImage} alt="Sign In Image" />

            <p>Or sign in with .... ....</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
