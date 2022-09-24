import React from 'react';
import ReactDOM from 'react-dom/client';
import AddBook from './AddBook';
import "./Home.css";
function Home()
{
    return ( 
        <>
        <div class="container">
        <div class="row">
          <div class="col">

            <AddBook />
          
          </div>
          <div class="col">
            <div className='custom'>
          <div class="book">
		<div class="book-img"></div>
		<div class="text">
			<h2>The Wings Of Fire</h2>
			<p>The Wings of Fire is an autobiography of former Indian President APJ Abdul Kalam. The book covers his life before he became the President of India and commanded the armed forces. Renowned scientist and former Indian President APJ Abdul Kalam from 2002 to 2007 is well known across India and abroad as well.
				<p>Authors: A. P. J. Abdul Kalam</p>
				<p>Genres: Autobiography</p>
			</p>
			<a href="https://www.zoomtventertainment.com/lifestyle/books/article/book-review-wings-of-fire/711071#:~:text=The%20Wings%20of%20Fire%20is,and%20commanded%20the%20armed%20forces.&text=Renowned%20scientist%20and%20former%20Indian,India%20and%20abroad%20as%20well.">Read More <i class="fa fa-long-arrow-right"></i></a>
		</div>
	</div>
          </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Home;