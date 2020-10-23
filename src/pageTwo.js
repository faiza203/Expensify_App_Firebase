import React from  "react";
import { Link } from "react-router-dom";

// Create Page 
export const createTodoPage =  () =>(
    <form>
    <input type="text" id="todo" placeholder="Write todo here" required></input>
  <button>Add</button>
    </form>
);
// Not Found Page
export const notFoundPage = () => (
    <div>
    <p>404</p> <Link to="/">Home Page</Link>
    </div>
)