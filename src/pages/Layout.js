import {Outlet,Link} from "react-router-dom";
import "./Layout.css";

const Layout = () =>{
    return (
        <>
       
        <nav>
        <ul>
     <li className="leftside"><i class="fa fa-book" aria-hidden="true"></i> My Library</li>
     <li>
      <Link to="/booklist">Book List</Link>
      </li>
      <li>
        <Link to ="/">Home</Link>
      </li>
     
    </ul>
        </nav>
        <Outlet />


        <footer >
         <div class="footer-bottom">
             <p>copyright &copy;2022 Quiz Application. All right reserverd</p>
         </div>
   
 </footer>
        </>
    )
};

export default Layout;