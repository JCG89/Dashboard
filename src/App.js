import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardEmployee from "./Pages/DashboardEmployees/DashboardEmployee";
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance';
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <DashboardContextProvider>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={DashboardFinance} />
          <Route path="/dashboardEmployee" exact component={DashboardEmployee} />
        </Switch>
      </Router>

    </DashboardContextProvider>
  );
}
