import './index.css'

const SearchItems = (props) => {
  const { newResult, searchResult } = props;
  const { suggestion } = searchResult;

  const clickButoon = () => {
    newResult(suggestion);
  };

  return (
    <li className='search-items'>
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={clickButoon}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
        />
      </button>
    </li>
  );
};

export default SearchItems;
