import React, { useState, useEffect } from "react";

import "./AutoComplete.scss";

const AutoComplete = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [dropDownValues, setDropDownValue] = useState([]);

  useEffect(() => {
    SearchValues(inputValue);
  }, [inputValue]);

  function SearchValues(input) {
    if (!input || data.includes(input)) {
      setDropDownValue([]);
      return;
    }

    const listItems = data.filter((value) => value.toLowerCase().indexOf(input.toLowerCase()) !== -1);
    const list = listItems && listItems.length > 0 ? listItems : []
    setDropDownValue(list);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleListItemClick(e) {
    setInputValue(e.target.innerHTML);
    setDropDownValue([]);
  }
  return (
    <div className="AutoComplete">
      <div className="selectedItem__container">
        <input onChange={handleInputChange} value={inputValue}></input>
        <div className="listItem__container" onClick={handleListItemClick}>
          {
            dropDownValues && dropDownValues.map((val) => {
              return <div key={val} className="listItem">{val}</div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
