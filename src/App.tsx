import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></Header>
      <MainSection searchQuery={searchQuery}></MainSection>
    </>
  );
}

export default App;
