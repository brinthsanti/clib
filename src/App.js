import AutoComplete from './AutoComplete';

import './App.scss';
const test = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme",
  'Brinth',
  'santi',
];

function App() {
  return (
    <div className="App">
    <div className="container">
    <AutoComplete data={test} render={
      (inputValue, handleInputChange)=>{
        return <input onChange={handleInputChange} value={inputValue}></input>
      }
    }/>
    </div>
    <p>test paragraph</p>
    </div>
  );
}

export default App;
