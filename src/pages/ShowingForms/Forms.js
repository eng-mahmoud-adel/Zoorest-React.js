import React from 'react';
import Login from '../../components/Forms/Login';
import SignUp from '../../components/Forms/SignUp';
import AddQuestion from '../../components/Forms/AddQuestion';
import AddPost from '../../components/Forms/AddPost';
import Reminder from '../../components/Forms/Reminder';
import UploadAlbum from '../../components/Forms/UploadAlbum';
import Location from '../../components/Forms/Location';
import Profile from '../../components/Forms/Profile';
import Appointment from '../../components/Forms/Appointment';
import AddAnimal from '../../components/Forms/AddAnimal';

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
            <SignUp title= "Sign Up with us" user= "row justify-content-center w-100" />
            <SignUp title= "Sign Up with us" doctor= "row justify-content-center w-100" />

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

            <hr />
            <h1>Upload Album</h1>
            <hr />
            <UploadAlbum title= "Upload Album" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the " />

            <hr />
            <h1>Location</h1>
            <hr />
            <Location title= "Select your location" text= "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." />

            <hr />
            <h1>Profile</h1>
            <hr />
            <Profile title= "Account Information" text= "At least 800x800px PNG or JPG file." />

            <hr />
            <h1>Add animal</h1>
            <hr />
            <AddAnimal title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepOne= "step-one" />
            <AddAnimal title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepTwo= "step-two" />
            <AddAnimal title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepThree= "step-three" />

            <hr />
            <h1>Appointment</h1>
            <hr />
            <Appointment title= "Appointment managment" />







        </div>
    )
}

export default Forms;
