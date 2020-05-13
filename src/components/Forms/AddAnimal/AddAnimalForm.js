import React, {useState} from 'react';
import Button from '../../Buttons/Button/Button';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

const AddAnimalForm = () => {

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

    const nextButton = () => {
        if (currentStep < 3) {
            return (
                <Button text="Next" color="btn btn-info" size="btn-sm" onClick={_next}/>
            )
        } else if (currentStep == 3) {
            return (
                <Button text="Finish" color="btn btn-info" size="btn-sm" onClick={_finish}/>
            )
        }
        return null;
    }

    return (
        <form onSubmit="">
            <Step1 currentStep={currentStep}/>
            <Step2 currentStep={currentStep}/>
            <Step3 currentStep={currentStep}/>
            <div className="row">
                <div className="col-3 offset-1 mt-5">
                    <Button text="Cancel" color="btn btn-light" size="btn-sm"/>
                </div>
                <div className="col-3 offset-1 mt-5">
                    {previousButton()}
                </div>
                <div className="col-3 mt-5">
                    {nextButton()}
                </div>
            </div>
        </form>
    );
}

export default AddAnimalForm;
