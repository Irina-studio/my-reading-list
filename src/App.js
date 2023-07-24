
import './App.css';
import { Book } from './Book';
import books from './books.png';


function App() {
  return (
    <div className="App">

    <div className="container">
     <img src={books}  width='150px' alt="books" />
    </div>
     

    <div className="container">
        <h1 >Reading List</h1>
    </div>
     
     <Book />
    
    
    </div>
  );
}

export default App;
