import React from 'react';
import Login from '../../components/Forms/Login';
import SignUp from '../../components/Forms/SignUp';
import AddQuestion from '../../components/Forms/AddQuestion';
import AddPost from '../../components/Forms/AddPost';
import Reminder from '../../components/Forms/Reminder';

const Forms = () => {
    return (
        <div className= "container">
            <hr />
            <h1>Login</h1>
            <hr />
            <Login title= "Login to your account" />

            <hr />
            <h1>Sign up</h1>
            <hr />
            <SignUp title= "Sign Up with us" />

            <hr />
            <h1>Add Question</h1>
            <hr />
            <AddQuestion title= "Add a question" />

            <hr />
            <h1>Add Post</h1>
            <hr />
            <AddPost title= "Add new Post" />

            <hr />
            <h1>Reminder</h1>
            <hr />
            <Reminder title= "Add reminders to your calendar" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the elastic properties of available materials" />
        </div>
    )
}

export default Forms;
