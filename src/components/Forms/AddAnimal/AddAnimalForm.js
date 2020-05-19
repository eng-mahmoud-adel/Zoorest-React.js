import React, {useState} from 'react';
import Button from '../../Buttons/Button/Button';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import {connect} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";
import {hideModal} from "../../../store/actions/modal";
import {createPet} from "../../../store/actions/pet";
import Pet from '../../../model/Pet';

const AddAnimalForm = ({hideModal, createPet}) => {

    const [currentStep, setCurrentStep] = useState(1);

    const _next = () => {
        if (currentStep >= 2) return setCurrentStep(currentStep + 1);
        else setCurrentStep(currentStep + 1);
    }

    const _prev = () => {
        if (currentStep <= 1) return 1;
        else setCurrentStep(currentStep - 1);
    }

    const _finish = () => {
        if (currentStep !== 3) return setCurrentStep(3);
    }

    const previousButton = () => {
        if (currentStep !== 1) {
            return (
                <Button text="Back" color="btn btn-danger" size="btn-sm" onClick={_prev}/>
            )
        }
        return null;
    }

    // const nextButton = () => {
    //     if (currentStep < 3) {
    //         return (
    //             <Button text="Next" color="btn btn-info" size="btn-sm" onClick={_next}/>
    //         )
    //     } else if (currentStep == 3) {
    //         return (
    //             <Button text="Finish" color="btn btn-info" size="btn-sm" onClick={() => {
    //                 handleFormSubmit({
    //                     name: values.name,
    //                     vaccinationsName: values.vaccinationsName
    //                 });
    //                  _finish();
    //                 }}
    //                 />
    //         )
    //     }
    //     return null;
    // }

    const handleSubmissionSuccess = () => {
        hideModal();
    }

    const handleFormSubmit = (values) => {
        console.log(values);
        createPet(new Pet({
            name: values.name,
            vaccinationsName: values.vaccinationsName
        }));
        handleSubmissionSuccess();
    }

    return (
        <Formik
            initialValues={{
                name: "",
                vaccinationsName: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('This field is required.'),
                vaccinationsName: Yup.string().required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>
                <form>
                    <Step1 
                        currentStep={currentStep} 
                        values={values} 
                        errors={errors} 
                        touched={touched} 
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <Step2 
                        currentStep={currentStep} 
                        values={values} 
                        errors={errors} 
                        touched={touched} 
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <Step3 
                        currentStep={currentStep} 
                        values={values} 
                        errors={errors} 
                        touched={touched} 
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                    <div className="row">
                        <div className="col-3 offset-1 mt-5">
                            <Button text="Cancel" color="btn btn-light" size="btn-sm"/>
                        </div>
                        <div className="col-3 offset-1 mt-5">
                            {previousButton()}
                        </div>
                        <div className="col-3 mt-5">
                            {currentStep < 3 ? 
                                <Button text="Next" color="btn btn-info" size="btn-sm" onClick={_next}/>
                                :
                                currentStep == 3 ? <Button text="Finish" color="btn btn-info" size="btn-sm" onClick={() => {
                                    handleFormSubmit({
                                        name: values.name,
                                        vaccinationsName: values.vaccinationsName
                                    });
                                    _finish();
                                    handleReset();
                                    }}
                                    disabled={isSubmitting}/> : ""
                                }
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    );
}

const mapDispatchToProps = (dispatch) => ({
    hideModal: () => {
        dispatch(hideModal())
    },
    createPet: (request) => {
        dispatch(createPet(request))
    },
});

export default connect(null, mapDispatchToProps)(AddAnimalForm);
