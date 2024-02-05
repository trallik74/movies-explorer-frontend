import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form" name="search-form">
      <div className="search-area">
        <input type="text" placeholder="Фильм" className="search-form__input" />
        <button type="submit" className="search-form__button" />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
