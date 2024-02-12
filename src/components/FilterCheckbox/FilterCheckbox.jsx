import { useEffect, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isTumblerActive, handleTumblerChange, onSubmit, isSending }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      onSubmit();
    }
  }, [isTumblerActive]);

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        name="filter-checkbox"
        className="filter-checkbox"
        checked={isTumblerActive}
        disabled={isSending}
        onChange={() => {
          if (!isClicked) {
            setIsClicked(true);
          }
          handleTumblerChange();
        }}
      />
      <span className="styled-chekbox"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
