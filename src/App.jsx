import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import ThankyouPage from "./pages/ThankyouPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <YourInfo /> },
      { path: "select-plan", element: <SelectPlan /> },
      { path: "add-ons", element: <AddOns /> },
      { path: "summary", element: <Summary /> },
      { path: "thanks", element: <ThankyouPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
