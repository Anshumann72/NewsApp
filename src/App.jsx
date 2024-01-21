import { useState } from "react";
import { NewsSite } from "./components/NewsSite";
import { NewsBoard } from "./components/NewsBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsApi } from "./components/NewsApi";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <NewsSite setCategory={setCategory} />
      <NewsApi category={category} />
      <NewsBoard />
    </>
  );
}

export default App;
