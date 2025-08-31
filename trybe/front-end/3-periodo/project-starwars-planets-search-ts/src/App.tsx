import React from "react";
import "./App.css";
import { useFetchPlanets } from "./hooks/useFetchPlanets";
import Table from "./components/Table";
import NameFilter from "./components/NameFilter";
import NumericFilter from "./components/NumericFilter";

function App() {
  useFetchPlanets();
  return (
    <>
      <NameFilter />
      <NumericFilter />
      <Table />
    </>
  );
}

export default App;
