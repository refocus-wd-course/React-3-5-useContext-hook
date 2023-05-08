import React, { useContext } from 'react';
// STEP 4: import UserContext and useContext
// import { UserContext } from '../App';

const Header = () => {
    // STEP 5: Using the useContext hook pass the UserContext
    // const user = useContext(UserContext);
    return (
        <header>
            {/* STEP 6: Display user.name here */}
            {/* <h1>Welcome, {user.name}!</h1> */}
        </header>
    );
};

export default Header;