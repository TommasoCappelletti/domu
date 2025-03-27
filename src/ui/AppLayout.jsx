import Menu from "./Sidebar";
import Loader from "./Loader";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="h-screen flex flex-col justify-between py-3 px-2 md:px-5 ">
      <Header />
      <div className="flex relative sm:space-x-5 flex-wrap md:flex-nowrap">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
