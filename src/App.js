import { useState } from "react";
import "./styles.css";
import "./app.css";
import Dropdown from "./components/Dropdown";
import Details from "./components/Details";

export default function App() {
  const [selected, setSelected] = useState({});

  const handleOnSelect = (cat) => {
    console.log(cat);
    setSelected({
      image: cat.image.url,
      name: cat.name,
      desc: cat.description
    });
  };

  return (
    <div className="App">
      <div className="title">To do list cats</div>

      <Details
        image={selected.image}
        name={selected.name}
        desc={selected.desc}
      />
      <Dropdown selected={selected.name} onSelect={handleOnSelect} />
    </div>
  );
}
