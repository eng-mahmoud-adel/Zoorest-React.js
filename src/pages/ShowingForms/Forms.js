import React from 'react';
import LoginForm from '../../components/Forms/Auth/LoginForm';
import SignUpFormContainer from '../../components/Forms/Auth/Signup/SignUpFormContainer';
import AddQuestion from '../../components/Forms/AddQuestion';
import AddPostForm from '../../components/Forms/AddPostForm';
import ReminderForm from '../../components/Forms/ReminderForm';
import UploadAlbumForm from '../../components/Forms/UploadAlbumForm';
import Location from '../../components/Forms/Location';
import ProfileForm from '../../components/Forms/ProfileForm';
import Appointment from '../../components/Forms/Appointment';
import AddAnimalForm from '../../components/Forms/AddAnimal/AddAnimalForm';

const Forms = () => {
    return (
        <div className= "container mt-5">
            <hr />
            <h1>Login</h1>
            <hr />
            <div className= "col-md-6 mx-auto">
                <LoginForm />
            </div>

            <hr />
            <h1>Sign up</h1>
            <hr/>
            <div className="container col-md-12 mx-auto">
                <SignUpFormContainer user="row justify-content-center w-100"/>
                <SignUpFormContainer doctor="row justify-content-center w-100"/>
            </div>

            <hr />
            <h1>Add Question</h1>
            <hr />
            <AddQuestion title= "Add a question" />

            <hr />
            <h1>Add Post</h1>
            <hr />
            <AddPostForm title= "Add new Post" />

            <hr />
            <h1>Reminder</h1>
            <hr />
            <ReminderForm title= "Add reminders to your calendar" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the elastic properties of available materials" />

            <hr />
            <h1>Upload Album</h1>
            <hr />
            <UploadAlbumForm title= "Upload Album" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the " />

            <hr />
            <h1>Location</h1>
            <hr />
            <Location title= "Select your location" text= "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." />

            <hr />
            <h1>Profile</h1>
                <hr/>
                <ProfileForm title="Account Information" text="At least 800x800px PNG or JPG file."/>

            <hr />
            <h1>Add animal</h1>
            <hr />
            <AddAnimalForm title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepOne= "step-one" />
            <AddAnimalForm title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepTwo= "step-two" />
            <AddAnimalForm title= "Add Animal" text= "Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the" stepThree= "step-three" />

            <hr />
            <h1>Appointment</h1>
            <hr />
            <Appointment title= "Appointment managment" />







        </div>
    )
}

export default Forms;
