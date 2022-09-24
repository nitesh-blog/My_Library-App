import React, {useState,useEffect} from "react";
import ReactDom from "react-dom/client";
import "./AddBook.css";



function AddBook()
{

  const [books,setbooks] = useState([]);

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setbooks(values => ({...values, [name]: value}))

}



function handleAddBook(e) {
    e.preventDefault();
    
    console.log(books);
}

    
//  useEffect(() => {
//      localStorage.setItem('books',JSON.stringify(books));
//  }, [books]);


useEffect(() =>{
    localStorage.setItem('books' ,JSON.stringify(books));
}, [books]);






    return(
        <>
        <h2 className="font-change"  style={{marginTop : "50px"}}>Add a New Book</h2>
    <form onSubmit={handleAddBook} >
       
        <label>Title:</label> <br/>
        <input type="text" placeholder="Enter the title of the book" name="title" value={books.title || ""} onChange = {handleChange} />
        <br/>
        
        <label>Autor:</label> <br/>
        <input type="text" placeholder="Enter the name of the author of the book"  name="author" value={books.author || ""} onChange = {handleChange}  />
        <br/>

        <label>Year:</label> <br/>
        <input type="number" placeholder="Enter the year in which the book was written"  name="year" value={books.year || ""} onChange = {handleChange}  />
        <br/>

        <label>ISBN:</label> <br/>
        <input type="number" placeholder="Enter the ISBN number of the book"  name="isbn" value={books.isbn || ""} onChange = {handleChange}  />
        <br/>

        <label>Cover Image URL:</label> <br/>
        <input type="text"  placeholder="Enter the URL for the cover image of the book"  name="coverimg" value={books.coverimg || ""} onChange = {handleChange}  />
        <br/>

        <label>Blurb:</label> <br/>
        <textarea rows="5"  placeholder="Enter a description" name="blurb" value={books.blurb || ""} onChange = {handleChange} />

       <button className="btn" >AddBook</button>
    </form>

        </>

    );
}

export default AddBook;