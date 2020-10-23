import React from "react";
import { Link } from "react-router-dom";

// Register page 
export const registerPage = () => (
    <div>
        <form>
            <label>
                Name :
  </label>
            <input id="name" type="text" placeholder="Please Enter Name Here" required />
            <label>
                Password :
  </label>
            <input id="password" type="password" placeholder="  Please Enter Password" required />
            <label>
                Email :
  </label>
            <input id="email" type="email" placeholder="
  Please Enter Email" required />
            <label>
                Confirm Password
  </label>
            <input id="confirm_password" type="password" placeholder="Please Rewrite Password" required />
        </form>
    </div>
);
// Login page 
export const loginPage = () => (
    <div>
        <form>
            <label>
                Name :
  </label>
            <input id="name" type="text" placeholder="Please Enter Name Here" required />
            <label>
                Password :
  </label>
            <input id="password" type="password" placeholder="  Please Enter Password" required />
            <label>
                Email :
  </label>
            <input id="email" type="email" placeholder="
  Please Enter Email" required />
        </form>
    </div>
);
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