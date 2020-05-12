import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from '../../Buttons/Button/Button';
import {connect} from 'react-redux';
import {showModal} from '../../../store/actions/modal';
import AddAnimalForm from '../../Forms/AddAnimalForm';
import {EllipsisIcon} from '../../Icons/index';

const Pet = ({model, showModal}) => {

    const addAnimal = () => {
        showModal(AddAnimalForm)
    }

    const showDropdown = () => {
        document.getElementById(`pet_${model.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    console.log(openDropdown)
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        }

    return (
        <Fragment>
            {model ? 
                <div className="col-lg-4 col-md-6 mb-4">
                    <Card className="pet-card">
                        <div>
                            <Card.Img variant="top" src={model.image} />
                        </div>
                        <Card.Body>
                            <div className="d-flex">
                                <Card.Title className="font-weight-bold">{model.name}</Card.Title>

                                <EllipsisIcon className="ml-auto dropbtn mt-1" style={{cursor: "pointer"}} onClick={showDropdown}/>
                                <div id={`pet_${model.id}`} className="dropdown-content">
                                    <a href="#edit">Edit</a>
                                    <a href="#remove">Remove</a>
                                    <a href="#report">Report</a>
                                </div>
                            </div>

                            <Card.Text>{`Date of Birth: ${model.birth_date}`}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            :
            <div className="mx-auto">
                <p>You dont have animals yet</p>
                <Button text="Add Animal" color="btn btn-info" size="btn-sm" onClick={addAnimal}/>
            </div>}
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(null, mapDispatchToProps)(Pet);