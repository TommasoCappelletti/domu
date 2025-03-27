import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Board from "./features/board/Board";
import Error from "./ui/Error";
import Communications, {
  loader as communicationsLoader,
} from "./features/communications/Communications";
import Summary from "./features/summary/Summary";
import SingleCommunication, {
  loader as communicationLoader,
} from "./features/communications/SingleCommunication";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Communications />,
        loader: communicationsLoader,
      },
      {
        path: "/bacheca",
        element: <Board />,
        errorElement: <Error />,
      },
      {
        path: "/comunicazioni",
        element: <Communications />,
        loader: communicationsLoader,
        errorElement: <Error />,
      },
      {
        path: "/comunicazioni/:communicationId",
        element: <SingleCommunication />,
        loader: communicationLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
