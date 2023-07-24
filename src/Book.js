import { Component } from "react";
import book from './book.png';


export class Book extends Component{
    constructor(){
    super();
   this.state = {
    userInput: '',
    bookList: []
    }
 }
    onChangeEvent(e){
        this.setState({userInput:e})
    }

   addItem(input){
    if(input === ''){
        alert("Please enter in item")
    }else{
    let listArray = this.state.bookList;
    listArray.push(input);
    this.setState({bookList: listArray, userInput: ''})
   }
}


deleteItem(){
    let listArray = this.state.bookList;
    listArray = [];
    this.setState({bookList: listArray});
}

crossWord(event){
   const li = event.target;
   li.classList.toggle ('crossed');
}

onFormSubmit(e){
e.preventDefault()
}


    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
               <input type="text"
               placeholder="What do you want to read?"
               onChange={(e) => {this.onChangeEvent(e.target.value)}}
               value={this.state.userInput}/> 
            </div>
           
           <div className="container">
            <div className="container1">
                <button onClick={() => this.addItem(this.state.userInput)} className="add btn">Add</button>
            </div>
            <div className="container1">
                <button onClick={() => this.deleteItem()} className="delete btn">Delete</button>
            </div>
            </div>

            <ul>
                {this.state.bookList.map((item, index) => (
                   <li  onClick={this.crossWord} key={index}>
                    <img className="line" src={book} width="20px" alt="book"/>
                    {item}</li> 
                ))}
            </ul>
            
            </form>
            </div>
            
        )
    }
}
