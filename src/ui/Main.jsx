import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function Main() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className="max-h-[78vh] min-h-[78vh] relative w-full sm:p-4 p-3  bg-cyan-600 sm:border rounded-xl overflow-auto">
      {isLoading && <Loader />}
      <Outlet />
    </main>
  );
}

export default Main;
