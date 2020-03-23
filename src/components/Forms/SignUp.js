import React from 'react';
import Size from '../Buttons/CombinedButtons/Size';
import BasicInput from '../Inputs/BasicInput';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';
import MultiSelect from '../Inputs/MultiSelect';
import DropFileWithButton from './DropFiles/DropFileWithButton';

const SignUp = (props) => {
    return (
        // <form id= "signUp" className= "modal fade">
        //     <div className="form-group signup-form col-8 modal-body">
        //         <div className= "text-right">
        //             <a href= "#">Login</a>
        //         </div>
        //         <h3 className= "title text-center mb-5 mt-3">{props.title}</h3>
        //         <div className= "my-2 mx-auto col-10">
        //             <Size size= "btn-group-lg" textOne= "User" textTwo= "Doctor" textThree= "Clinic" />
        //         </div>
        //         <div className= "row justify-content-center">
        //             <div className= "my-3 col-10">
        //                 <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Full Name" />
        //             </div>
        //             <div className= "mb-3 col-10">
        //                 <BasicInput className= "basic-input" type= "email" placeholder= "email" label= "Email Address" />
        //             </div>
        //             <div className= "mb-3 col-10">
        //                 <BasicInput className= "basic-input" type= "text" placeholder= "number" label= "Phone Number" />
        //             </div>
        //             <div className= "mb-3 col-10">
        //                 <BasicInput className= "basic-input" type= "text" placeholder= "number" label= "Additional Phone Number" />
        //             </div>
        //             <div className= "mb-3 col-5">
        //                 <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Password" />
        //             </div>
        //             <div className= "mb-3 col-5">
        //                 <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Confirm Password" />
        //             </div>
        //             {props.user && 
        //             <div className= {props.user}>
        //                 <div className= "mb-3 col-5">
        //                     <MultiSelect />
        //                 </div>
        //                 <div className= "mb-3 col-5">
        //                     <MultiSelect />
        //                 </div>
        //                 <div className= "mb-3 col-10">
        //                     <MultiSelect />
        //                 </div>
        //             </div>}
        //             {props.doctor && 
        //             <div className= {props.doctor}>
        //                 <div className= "mb-3 col-5">
        //                     <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Official doctor name" />
        //                 </div>
        //                 <div className= "mb-3 col-5">
        //                     <BasicInput className= "input-icon-left" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" label= "Select your location" />
        //                 </div>
        //                 <div className= "mb-3 col-5">
        //                     <MultiSelect />
        //                 </div>
        //                 <div className= "mb-3 col-5">
        //                     <MultiSelect />
        //                 </div>
        //                 <div className= "mb-3 col-10">
        //                     <DropFileWithButton />
        //                 </div>
        //             </div>}
        //             <div className= "mb-4 col-9">
        //                 <SmallButton text= "Sign Up" color= "btn btn-info" size= "btn-sm" />
        //             </div>
        //         </div>
        //         <div className= "row justify-content-center">
        //             <span className= "line col-3 mb-3"></span>
        //             <span className= "col-1">or</span>
        //             <span className= "line col-3 offset-1 mb-3"></span>
        //         </div>
        //         <div className= "row justify-content-center">
        //             <div className= "col-4 text-right pr-2">
        //                 <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
        //             </div>
        //             <div className= "col-4 pl-2">
        //                 <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />
        //             </div>
        //         </div>
        //     </div>
        // </form>

        
        

        // here we should write className= modal fade
        <div className="" id="signUp" tabIndex="-1" aria-labelledby="signUp" aria-hidden="true">
            {/* here we should write className= modal-content */}
            <div className="">
                <div className="modal-body">
                    <form>
                        <div className="form-group signup-form col-8">
                            <div className= "text-right">
                                <a href= "#">Login</a>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <h3 className= "title text-center mb-5 mt-3">{props.title}</h3>
                            <div className= "my-2 mx-auto col-10">
                                <Size size= "btn-group-lg" textOne= "User" textTwo= "Doctor" textThree= "Clinic" />
                            </div>
                            <div className= "row justify-content-center">
                                <div className= "my-3 col-10">
                                    <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Full Name" />
                                </div>
                                <div className= "mb-3 col-10">
                                    <BasicInput className= "basic-input" type= "email" placeholder= "email" label= "Email Address" />
                                </div>
                                <div className= "mb-3 col-10">
                                    <BasicInput className= "basic-input" type= "text" placeholder= "number" label= "Phone Number" />
                                </div>
                                <div className= "mb-3 col-10">
                                    <BasicInput className= "basic-input" type= "text" placeholder= "number" label= "Additional Phone Number" />
                                </div>
                                <div className= "mb-3 col-5">
                                    <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Password" />
                                </div>
                                <div className= "mb-3 col-5">
                                    <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Confirm Password" />
                                </div>
                                {props.user && 
                                <div className= {props.user}>
                                    <div className= "mb-3 col-5">
                                        <MultiSelect />
                                    </div>
                                    <div className= "mb-3 col-5">
                                        <MultiSelect />
                                    </div>
                                    <div className= "mb-3 col-10">
                                        <MultiSelect />
                                    </div>
                                </div>}
                                {props.doctor && 
                                <div className= {props.doctor}>
                                    <div className= "mb-3 col-5">
                                        <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Official doctor name" />
                                    </div>
                                    <div className= "mb-3 col-5">
                                        <BasicInput className= "input-icon-left" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" label= "Select your location" />
                                    </div>
                                    <div className= "mb-3 col-5">
                                        <MultiSelect />
                                    </div>
                                    <div className= "mb-3 col-5">
                                        <MultiSelect />
                                    </div>
                                    <div className= "mb-3 col-10">
                                        <DropFileWithButton />
                                    </div>
                                </div>}
                                <div className= "mb-4 col-9">
                                    <SmallButton text= "Sign Up" color= "btn btn-info" size= "btn-sm" />
                                </div>
                            </div>
                            <div className= "row justify-content-center">
                                <span className= "line col-3 mb-3"></span>
                                <span className= "col-1">or</span>
                                <span className= "line col-3 offset-1 mb-3"></span>
                            </div>
                            <div className= "row justify-content-center">
                                <div className= "col-4 text-right pr-2">
                                    <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                                </div>
                                <div className= "col-4 pl-2">
                                    <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
