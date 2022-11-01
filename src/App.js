import logo from "./logo.svg";
// import Ronke from './src/Ronke.jpeg'
import slack from './slack.png';
import github from './github.png';
import Zuri from './Zuri.svg';
import ingressive from './ingressive.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src="Ronke.jpeg" id="profile_img" alt="Ronke" />
        <p id="twitter">Ronke Olajide</p>
        <p id="slack">Olajide Ronke</p>
        <a
          className="link"
          href="https://mobile.twitter.com/olajide_Ronke2"
          target="_blank"
          
          rel="noopener noreferrer"
        >
          Twitter Link
        </a>
        <a
          className="link"
          href="https://training.zuri.team/"
          target="_blank"
          id="btn_zuri"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
        <a
          className="link"
          href="https://books.zuri.team"
          target="_blank"
          id="books"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
        <a
          className="link"
          href="https://books.zuri.team/python-for-beginners?ref_id=<olajideronke>"
          target="_blank"
          id="book_python"
          rel="noopener noreferrer"
        >
          Python Books
        </a>
        <a
          className="link"
          href="https://backround.zuri.team"
          target="_blank"
          id="pitch"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>
        <a
          className="link"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          id="book_design"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
        <div className="socials">
        <img src={slack} alt="slack" height="7%" width="7%"></img>
        <img src={github} alt="github" height="7%" width="7%"></img>
      
      </div>
      <footer id="footer">
        <div>
          <img src={Zuri} alt="zuri" height="8%" width="50%" className="zuri"></img>
          <p className="text">HNG Internship 9 Frontend Task</p>
          <img src={ingressive} alt="ingressive"height="10%" width="45%" className="ingressive"></img>
        </div>
      </footer>
      </header>
      

     

    </div>
  );
}

export default App;
