import React from 'react';
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux';
import {showModal} from '../../../store/actions/modal';
import {HorizontalEllipsisIcon} from "../../Icons";

const Pet = ({model}) => {


    const showDropdown = () => {
        document.getElementById(`pet_${model.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
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
        <Card className="pet-card">
            <div className="img-container">
                <div className="brand-filter">
                    <Card.Img variant="top" src={model.image}/>
                </div>
            </div>
            <Card.Body>
                <div className="d-flex">
                    <Card.Title className="header-5 medium">{model.name}</Card.Title>

                    <HorizontalEllipsisIcon className="ml-auto dropbtn mt-1" style={{cursor: "pointer"}}
                                            onClick={showDropdown}/>
                    <div id={`pet_${model.id}`} className="dropdown-content">
                        <a href="#edit">Edit</a>
                        <a href="#remove">Remove</a>
                        <a href="#report">Report</a>
                    </div>
                </div>

                {/*todo format birth_date using moment */}
                <Card.Text className="label">{`Date of Birth: ${model.birth_date}`}</Card.Text>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(null, mapDispatchToProps)(Pet);
