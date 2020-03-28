import React from 'react'
import BaseModal from "react-bootstrap/Modal";
import {connect} from "react-redux";
import {hideModal} from "../../store/actions/modal";

const Modal = props => {

    const RenderComponent = props.modal.modal_component;

    const handleModalHide = () => {
        props.hideModal();
    };

    return (
        <BaseModal show={props.modal.is_modal_visible} onHide={handleModalHide}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
            <BaseModal.Body>
                {RenderComponent && <RenderComponent/>}
            </BaseModal.Body>
        </BaseModal>
    );
};

const mapStateToProps = (state) => ({
    modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
    hideModal: () => {
        dispatch(hideModal());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
