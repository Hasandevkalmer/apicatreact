import { useState, useEffect } from "react";
function Dropdown({ selected, onSelect }) {
  const [isActive, setActive] = useState(false);

  // buat state options
  const [options, setOptions] = useState([]);

  // panggil function getList di dalam useEffect
  async function getListBreed() {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const json = await res.json();
    setOptions(json);
  }
  useEffect(() => {
    getListBreed();
  }, []);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
          {selected || "Choose one"}
          <span className="fas fa-caret-down"></span>
        </div>

        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={(e) => {
                  onSelect(option);
                  setActive(false);
                }}
                className="dropdown-item"
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
