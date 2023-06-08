import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'David';
  const lastName = 'Mallen';
  const age=28
  const job = 'Gentelmen';
  const inputPlaceholder = 'Enter your details'

  // function that returns a full name
  // const getFullName = (firstName, lastName) => {
  //     return `${firstName} ${lastName}`;
  // }

  // You can also store jsx in variables
  const inputBox = <input placeholder={inputPlaceholder} autoComplete/>;
  // Array
  const mArry = [1,2,3,4,5];
  // object
  const mObj = {
    name: 'David',
    age: 30,
  }
  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  return (
    // Inital
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // CHANGED CODE    

    <div className='App'>
      {/* <h3> Full Name: {firstName+ ' ' + lastName}</h3> */}
      {/* we can use template strings */}
      {/* <h3> Full Name: {`${firstName} ${lastName}`}</h3> */}
      <div className="BlogCard">
      <h3> Full Name: {getFullName(firstName, lastName)}</h3>
      </div>

      <p>Age: {mObj.age}</p>
      <p>Job: {job}</p>

      {/* <input placeholder={inputPlaceholder} autoComplete/> */}
      {inputBox}
      {/* Access array element */}
      {mArry[0]}
      {/* You cannot use for but you can use map() */}
      {
        // mArry.map()
      }
      {/* Similarly you cannot use if else but you can use ternary operator */}
      {
        mArry[0] > 0 ? true:false
      }
    </div>
  );
  // jsx is converted into java script using Babel
  /*
      eg. 
      <div className='main-div'></div>
      = React.createElement('div' {className='main-div'})
      why jsx?
      - for elegant and readable code
  */
}

export default App;
