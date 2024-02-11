import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox";

function SearchForm({
  isSending,
  inputValue,
  isSubmitEmpty,
  onChange,
  onSubmit,
  isTumblerActive,
  handleTumblerChange,
}) {
  return (
    <form
      className="search-form"
      name="search-form"
      noValidate
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
    >
      <div className="search-area">
        <input
          type="text"
          name="search"
          placeholder={isSubmitEmpty ? "Нужно ввести ключевое слово" : "Фильм"}
          className={`search-form__input ${
            isSubmitEmpty ? "search-form__input_type_empty" : ""
          }`}
          value={inputValue}
          onChange={onChange}
          required
        />
        <button
          type="submit"
          className="search-form__button"
          disabled={isSending}
        />
      </div>
      <FilterCheckbox
        isTumblerActive={isTumblerActive}
        handleTumblerChange={handleTumblerChange}
        onSubmit={onSubmit}
        isSending={isSending}
      />
    </form>
  );
}

export default SearchForm;
