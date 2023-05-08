import React, { useContext } from 'react';
// Repeat Step 4-6 here but dispaly sa email instead
import { UserContext } from '../App';

const Main = () => {
    const user = useContext(UserContext);
    return (
        <main>
            <p>Your email is: {user.email}</p>
        </main>
    );
};

export default Main;