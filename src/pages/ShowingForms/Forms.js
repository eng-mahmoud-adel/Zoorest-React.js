import React from 'react';
import Login from '../../components/Forms/Login';

const Forms = () => {
    return (
        <div className= "container">
            <hr />
            <h1>Login</h1>
            <hr />
            <div className= "row">
                <div className= "col-8">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Forms;
