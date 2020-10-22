import React from "react";
// import uuid from "uuid";

// login page 
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