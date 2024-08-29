import { Component } from "react";
import SearchItems from "../SearchItems";

import "./index.css";

class GoogleSearch extends Component {
  state = {
    userInput: "",
  };

  newResult = (input) => {
    this.setState({ userInput: input });
  };

  onChangeInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const { userInput } = this.state;
    const { suggestionsList } = this.props;
    const searchResult = suggestionsList.filter((each) =>
      each.suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    return (
      <div className="app-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="text"
                value={userInput}
                className="search"
                onChange={this.onChangeInput}
                placeholder="Search Google"
              />
            </div>
            <ul>
              {searchResult.map((eachItem) => (
                <SearchItems
                  key={eachItem.id}
                  searchResult={eachItem}
                  newResult={this.newResult}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSearch;
