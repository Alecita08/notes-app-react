import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
                 {/* create new note */}
                <form action="register-note.php" method="post">
                    <label htmlFor="note">Nota</label>
                    <input type="text" name="note" id="note" />
                    <input type="submit" value="Submit" name="Submit"/>
                </form>
                 {/* display all notes */}
                <div>

                </div>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;