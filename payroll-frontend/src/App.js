import logo from './Logo.png';
import './App.css';

const categories = ['Admin', 'Employee'];

function App() {

  return (
    <div className="App">

      {/* The header of page */}
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      
      {/* The log in buttons */}
      <div className="Login">
        <button className="Login-button" onClick={showForm}>Log in as {categories[0]}</button>
        <button className="Login-button" onClick={showForm}>Log in as {categories[1]}</button>
      </div>

      {/* The transparent black film that will appear when any one of the abobe buttons is clicked and login form is displayed */}
      <div class="Film"></div>

      {/* Login form for admin */}
      <form class="Login-form" id="Admin" onSubmit={checkAuth} onChange={verifyEmail}>
        <h1>LOG IN</h1>
        <input type="email" placeholder="username or email" className="Input-field"></input>
        <p className="Error"></p>
        <input type="password" placeholder="password" className="Input-field"></input>
        <input type="submit" value="Log in"></input>
      </form>

      {/* Login form for employee */}
      <form class="Login-form" id="Employee" onSubmit={checkAuth}>
        <h1>LOG IN</h1>
        <input type="text" placeholder="unique identification no" className="Input-field"></input>
        <input type="password" placeholder="password" className="Input-field"></input>
        <input type="submit" value="Log in"></input>
      </form>

    </div>
  );
}

// function to show corresponding form once a button is clicked
function showForm(e){
  document.querySelector('.Film').style.display = 'block';
  for(let i=0;i<categories.length;i++)
  {
    let text = e.target.innerText;
    if(categories[i] === text.slice(text.lastIndexOf(' ')+1,text.length)) {
      document.getElementById(`${categories[i]}`).style.display = 'block';
    }
  }
}

// function to check validity of email address
function verifyEmail(e) {

  // regular expression to check whether entered email ID is correct or not
  const regex = /^[\w\d]{3,30}@[\w]{1,20}\.(com|in|(co\.in)|(ac\.in))$/;
  
  const para = document.querySelector('.Error');
  if(!regex.test(e.target.value)) {
    para.style.display = 'block';
    para.textContent = 'Please enter a valid email ID';
  }
  else {
    para.style.display = 'none';
  }
}

function checkAuth(e) {
  e.preventDefault();
  for(let i=0;i<categories.length;i++)
  {
    if(categories[i] === e.target.id) {
      //fetch data from table with name categories[i]
      
      //rest of the backend logic

    }
  }
}

export default App;