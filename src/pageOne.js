import React from "react";
import { Link } from "react-router-dom";
import { signUp , signIn } from "./Firebase/auth"
// Register page 
export const registerPage = () => (
    <div>
        <form onSubmit={signUp}>
            <label>
                Name :
  </label>
            <input id="name" type="text" placeholder="Please Enter Name Here" required />
            <label>
                Email :
  </label>
            <input id="email" type="email" placeholder="
  Please Enter Email" required />
            <label>
                Password :
</label>
            <input id="password" type="password" placeholder="  Please Enter Password" required />

            <label>
                Confirm Password
  </label>
            <input id="confirmPassword" type="password" placeholder="Please Rewrite Password" required />
            <button id="register" type="submit">Register</button>
        </form>
        <button id="loginPage" type="button"><Link to="/login">Login</Link></button>
    </div>
);
// Login page 
export const loginPage = () => (
    <div>
        <form onSubmit={signIn}>
            <label>
                Name :
  </label>
            <input id="name" type="text" placeholder="Please Enter Name Here" required />
            <label>
                Email :
  </label>
            <input id="email" type="email" placeholder="
  Please Enter Email" required />
            <label>
                Password :
  </label>
            <input id="password" type="password" placeholder="  Please Enter Password" required />
            <button id="login" type="submit">Login</button>
        </form>
    </div>
);