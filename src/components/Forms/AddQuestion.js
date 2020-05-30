import React from 'react';

import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';
import {Field, Form, Formik} from 'formik';
import {HIDE_MODAL} from "../../store/actions/modal";
import {connect} from "react-redux";
import * as Yup from "yup";
import {SelectField, TagsSelect} from "../Inputs/MultiSelect";
import {createQuestion} from "../../store/actions/questions";
import {withTranslation} from 'react-i18next';

const QuestionForm = withTranslation()(({errors, touched, isSubmitting, categories, t}) => {

    return (
        <div className="question-form">
            <h4 className="text-center font-bold my-4 ">Add a Question</h4>
            <div className="text-left">
                <div className="my-3 mx-auto col-10">
                    <label id="title">{t('title')}</label>
                    {/*<BasicInput className="basic-input" type="text" placeholder="input title" name="title" label="Title"/>*/}

                    <Field name="title"
                           type="text"
                           placeholder="Input title"
                           className="w-100 form-control basic-input"
                           label="Title"/>

                    {errors.title && touched.title ? (
                        <p className="field-error">{errors.title}</p>
                    ) : null}
                </div>

                <div className="mb-3 mx-auto col-10">
                    <label id="body">{t('body')}</label>

                    <Field name="description"
                           as="textarea"
                           placeholder="Input Question Description"
                           className="w-100 form-control basic-input"
                           label="Title"/>

                    {errors.description && touched.description ? (
                        <p className="field-error">{errors.description}</p>
                    ) : null}
                </div>

                <div className="mb-3 mx-auto col-10">

                    <Field
                        as={SelectField}
                        label={"Category"}
                        name={"category"}
                        placeholder={"Select Category"}
                        className={"w-100"}
                        options={categories}
                    />

                </div>

                <div className="mb-3 mx-auto col-10">
                    <label>{t('tags')}</label>

                    <Field name="tags[]"
                           as={TagsSelect}
                           placeholder="Input Tags"
                           className="w-100"
                           options={[]}
                           label="Title"/>
                    {/*<TagsSelect name="tags" options={[]}/>*/}

                    {errors.tags && touched.tags ? (
                        <p className="field-error">{errors.tags}</p>
                    ) : null}
                </div>

                <div className="col-10 align-items-center align-self-center mx-auto">
                    <DropFile/>

                    {errors.images && touched.images ? (
                        <p className="field-error">{errors.images}</p>
                    ) : null}
                </div>
                <div className="my-5 mx-auto text-center col-4">
                    <Button disabled={isSubmitting} type="submit" text="Ask a question" variant="danger"
                            size="sm"/>
                </div>
            </div>
        </div>

    );
})


const AddQuestion = ({currentLocale, addQuestion, hideModal, categories}) => {
    const handleSubmissionSuccess = (handleReset) => {
        //Close Modal After A successful signup
        // handleReset();
        hideModal();
    }

    const handleFormSubmit = (values, resetForm) => {
        console.log(values);

        // setSubmitting(false);
        addQuestion(values, handleSubmissionSuccess.bind(this, resetForm),
            (error_response) => {
                //maybe try setting form errors hena ?
            }, () => {
                // setSubmitting(false)

            });
    }

    const getCategories = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return categories.map(country => ({
            value: country.id,
            label: country.getLocalizedName(currentLocale),
        }));
    }

    const initialValues = {
        title: "",
        description: "",
        category: "",
        tags: [],
        images: [],
    };

    const validationSchema = Yup.object().shape({
        title: Yup
            .string()
            .required('This field is required.'),

        description: Yup
            .string()
            .required('This field is required.'),

        category: Yup
            .string()
            .required('This field is required.'),

        tags: Yup
            .array()
            .nullable(),

        images: Yup
            .array()
            .nullable(),
    });


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                // same shape as initial values
                handleFormSubmit(values)
            }}

            validationSchema={validationSchema}>
            {(formikProps) => (
                <Form>
                    <QuestionForm {...formikProps}
                                  categories={getCategories()}
                    />
                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    categories: state.globals.categories,
});

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (request, onSuccess, onError, onFinally) => {
        dispatch(createQuestion(request, onSuccess, onError, onFinally))
    },
    hideModal: () => {
        dispatch({type: HIDE_MODAL, payload: null})
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(AddQuestion));
