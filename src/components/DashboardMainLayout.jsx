import { Outlet } from "react-router-dom";

const DashboardMainLayout = () => {
  return (
    <>
      <div className="h-full w-full flex flex-1">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardMainLayout;
