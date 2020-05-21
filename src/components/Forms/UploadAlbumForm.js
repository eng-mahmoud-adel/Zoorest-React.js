import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';
import {connect} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";
import {hideModal} from "../../store/actions/modal";
import {createAlbum} from "../../store/actions/album";
import Album from "../../model/Album";
import {withTranslation} from 'react-i18next';

const UploadAlbumForm = withTranslation()(({hideModal, createAlbum, t}) => {

    const handleSubmissionSuccess = () => {
        hideModal();
    }

    const handleFormSubmit = (values) => {
        console.log(values);
        createAlbum(new Album({
            name: values.name
        }));
        handleSubmissionSuccess();
    }

    return (
        <Formik
            initialValues={{
                name: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>
                <form>
                    <div className="form-group album-form col-md-12">
                        <h3 className="title text-center my-4 pt-0">Upload Album </h3>
                        <p className="text text-center col-10 mx-auto mb-5">Occasionally he inserts a comment of his
                            own, either linking it into the main trail or joining it by a side trail to a particular
                            item. When it becomes evident that the </p>

                        <div className="col-10 my-5">
                            <label>{t('album_title')}</label>
                            <BasicInput
                                className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                name="name" type="text" value={values.name} placeholder="name"
                                handleChange={handleChange} handleBlur={handleBlur}/>
                            {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                        </div>
                        <div className="col-4 my-5">
                            <label>{t('upload_photos')}</label>
                            <DropFile/>
                        </div>
                        <div className="row">
                            <div className="ml-auto col-4">
                                <Button text="Cancel" color="btn btn-light" size="btn-sm"/>
                            </div>
                            <div className="mr-auto col-4">
                                <Button text="Add" color="btn btn-info" size="btn-sm" onClick={() => {
                                    handleFormSubmit({
                                        name: values.name,
                                    });
                                    handleReset();
                                }}
                                        disabled={isSubmitting}/>
                            </div>
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    )
})

const mapDispatchToProps = (dispatch) => ({
    hideModal: () => {
        dispatch(hideModal())
    },
    createAlbum: (request) => {
        dispatch(createAlbum(request))
    }
});

export default connect(null, mapDispatchToProps)(withTranslation()(UploadAlbumForm));
