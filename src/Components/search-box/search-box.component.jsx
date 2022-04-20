import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    // className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
    className={`search-box ${className}`}
  />
);

export default SearchBox;
