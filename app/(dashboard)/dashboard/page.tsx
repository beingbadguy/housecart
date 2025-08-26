import { redirect } from "next/navigation";


const DashboardHomePage = () => {
   redirect("/dashboard/admin");
};

export default DashboardHomePage;
