import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Sidebar from "./components/Sidebar.jsx";
import RequestLeave from "./pages/RequestLeave.jsx";
import Loan from "./pages/Loan.jsx";
import Info from "./pages/info.jsx";
import Profile from "./pages/Profile.jsx";
import Requisition from "./pages/Requisition.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import LeaveRequests from "./admin/LeaveRequests.jsx";
import Decision from "./admin/Decision.jsx";
import { Provider } from "react-redux";
import store from "./Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/request-leave",
    element: <RequestLeave />,
  },
  {
    path: "/apply-loan",
    element: <Loan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/leave-requests",
    element: <LeaveRequests />,
  },
  {
    path: "/leave-decision",
    element: <Decision />,
  },
  {
    path: "/requisition",
    element: <Requisition />,
  },
  {
    path: "/general-information",
    element: <Info />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}></PersistGate>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
