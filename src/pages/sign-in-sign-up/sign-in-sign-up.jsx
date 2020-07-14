import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import "./sign-in-sign-up";
import SignUp from "../../components/sign-up/sign-up"; 

const SignInAndSignUp = () => (
	<div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;
