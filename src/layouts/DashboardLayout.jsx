import DashboardMainLayout from "../components/DashboardMainLayout";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="h-full w-full flex">
        {/* sidebar */}
        <DashboardSidebar />
        {/* mainLayout */}
        <DashboardMainLayout />
      </div>
    </>
  );
};

export default DashboardLayout;
