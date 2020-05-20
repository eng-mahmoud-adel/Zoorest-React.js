import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import {MultiSelect} from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';
import {connect} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";
import {hideModal} from "../../store/actions/modal";
import {createPost} from "../../store/actions/posts";
import Post from "../../model/Post";

const AddPostForm = ({hideModal, createPost}) => {

    const handleSubmissionSuccess = () => {
        hideModal();
    }

    const handleFormSubmit = (values) => {
        console.log(values);
        createPost(new Post({
            color: values.color,
            price: values.price,
            licenseNumber: values.licenseNumber,
            postTitle: values.postTitle,
            classification: values.classification,
            currency: values.currency,
            vaccination: values.vaccination,
        }));
        handleSubmissionSuccess();
    }

    return (
        <Formik
            initialValues={{
                color: "",
                price: "",
                licenseNumber: "",
                postTitle: "",
                classification: "",
                currency: "",
                vaccination: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={Yup.object().shape({
                color: Yup.string().required('This field is required.'),
                price: Yup.string().required('This field is required.'),
                licenseNumber: Yup.string().required('This field is required.'),
                postTitle: Yup.string().required('This field is required.'),
                classification: Yup.string().required('This field is required.'),
                currency: Yup.string().required('This field is required.'),
                vaccination: Yup.string().required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>
                <form>
                    <div className="form-group post-form">
                        <h4 className= "title text-center font-weight-bold mt-0 pt-0 mb-3">Add New Post</h4>
                        <div className= "row justify-content-center">
                            <div className= "col-5">
                                <div className= "mb-3">
                                    <label>Post Type</label>
                                    <MultiSelect />
                                </div>
                                <div className= "mb-3">
                                    <label>Animal Type</label>
                                    <MultiSelect />
                                </div>
                                <div className= "mb-3">
                                    <label>Color</label>
                                    <BasicInput
                                        className={`basic-input ${values.color === "" ? "" : (!errors.color ? "is-valid" : "is-invalid")}`}
                                        name="color" type="text" value={values.color} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.color && touched.color && <div style={{color: "red"}}>{errors.color}</div>}
                                </div>
                                <div className= "mb-3">
                                    <label>Price</label>
                                    <BasicInput
                                        className={`basic-input ${values.price === "" ? "" : (!errors.price ? "is-valid" : "is-invalid")}`}
                                        name="price" type="text" value={values.price} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.price && touched.price && <div style={{price: "red"}}>{errors.price}</div>}
                                </div>
                                <div className= "mb-3">
                                    <label>License Number</label>
                                    <BasicInput
                                        className={`basic-input ${values.licenseNumber === "" ? "" : (!errors.licenseNumber ? "is-valid" : "is-invalid")}`}
                                        name="licenseNumber" type="text" value={values.licenseNumber} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.licenseNumber && touched.licenseNumber && <div style={{licenseNumber: "red"}}>{errors.licenseNumber}</div>}
                                </div>
                            </div>
                            <div className= "col-5">
                                <div className= "mb-3">
                                    <label>Post Title</label>
                                    <BasicInput
                                        className={`basic-input ${values.postTitle === "" ? "" : (!errors.postTitle ? "is-valid" : "is-invalid")}`}
                                        name="postTitle" type="text" value={values.postTitle} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.postTitle && touched.postTitle && <div style={{postTitle: "red"}}>{errors.postTitle}</div>}
                                </div>
                                <div className= "mb-3">
                                    <label>Gender</label>
                                    <MultiSelect />
                                </div>
                                <div className= "mb-3">
                                    <label>Classification</label>
                                    <BasicInput
                                        className={`basic-input ${values.classification === "" ? "" : (!errors.classification ? "is-valid" : "is-invalid")}`}
                                        name="classification" type="text" value={values.classification} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.classification && touched.classification && <div style={{classification: "red"}}>{errors.classification}</div>}
                                </div>
                                <div className= "mb-3">
                                    <label>Currency</label>
                                    <BasicInput
                                        className={`basic-input ${values.currency === "" ? "" : (!errors.currency ? "is-valid" : "is-invalid")}`}
                                        name="currency" type="text" value={values.currency} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.currency && touched.currency && <div style={{currency: "red"}}>{errors.currency}</div>}
                                </div>
                                <div className= "mb-3">
                                    <label>Vaccination</label>
                                    <BasicInput
                                        className={`basic-input ${values.vaccination === "" ? "" : (!errors.vaccination ? "is-valid" : "is-invalid")}`}
                                        name="vaccination" type="text" value={values.vaccination} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.vaccination && touched.vaccination && <div style={{vaccination: "red"}}>{errors.vaccination}</div>}
                                </div>
                            </div>
                        </div>
                        <div className= "mb-3 mx-auto col-10 p-0">
                            <label>Purity of the platoon</label>
                            <TextArea />
                        </div>
                        <div className= "mb-3 mx-auto col-10 p-0">
                            <label>Distincitve signs</label>
                            <TextArea />
                        </div>
                        <div className= "mb-3 col-4">
                            <DropFile />
                        </div>
                        <div className= "mb-5 mx-auto text-center col-4">
                            <Button text= "Add post" color= "btn btn-info" size= "btn-sm" onClick={() => {
                                    handleFormSubmit({
                                        color: values.color,
                                        price: values.price,
                                        licenseNumber: values.licenseNumber,
                                        postTitle: values.postTitle,
                                        classification: values.classification,
                                        currency: values.currency,
                                        vaccination: values.vaccination,
                                    });
                                    handleReset();
                                }}
                                disabled={isSubmitting} />
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    )
}

const mapDispatchToProps = (dispatch) => ({
    hideModal: () => {
        dispatch(hideModal())
    },
    createPost: (request) => {
        dispatch(createPost(request))
    }
});

export default connect(null, mapDispatchToProps)(AddPostForm);

