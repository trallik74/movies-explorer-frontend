import { useRef } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const checkbox = useRef();

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        name="filter-checkbox"
        className="filter-checkbox"
        onClick={() => {
          console.log(checkbox.current.checked);
        }}
        ref={checkbox}
      />
      <span className="styled-chekbox"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
