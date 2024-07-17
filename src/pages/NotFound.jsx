const NotFound = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center font-bold text-xl">
      This page was not found{" "}
      <a className="text-lg font-semibold text-blue-500" href="/user/home">
        Back to home
      </a>
    </div>
  );
};

export default NotFound;
