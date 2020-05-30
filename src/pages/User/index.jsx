import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Tab, Tabs} from 'react-bootstrap';
import {getSingleUser} from '../../store/actions/user';
import Photo from '../../components/Cards/Photos/Photo';
import {PhotoLoadingAnimationBar} from '../../components/Cards/Photos/LoadingAnimations/Photo';
import Pet from '../../components/Cards/Pets/Pet';
import DropFileWithButton from '../../components/Forms/DropFiles/DropFileWithButton';
import UserBio, {UserBioLoadingAnimation} from "../../components/UserBio";
import Button from "../../components/Buttons/Button/Button";
import {PetLoadingAnimationBar} from "../../components/Cards/Pets/LoadingAnimations/Pet";
import AddAnimalForm from "../../components/Forms/AddAnimal/AddAnimalForm";
import {showModal} from "../../store/actions/modal";
import Album from '../../components/Cards/Album/Album';
import {AlbumLoadingAnimationBar} from '../../components/Cards/Album/LoadingAnimations/Album';
import UploadAlbumForm from '../../components/Forms/UploadAlbumForm';
import Reminder from '../../components/Helpers/Reminder';
import ReminderForm from '../../components/Forms/ReminderForm';

const NoPetsSection = ({onButtonClicked}) => {

    return (
        <div className="mx-auto">
            <h3 className="font-bold">You dont have pets yet!</h3>
            <Button text="Add Animal" variant="info" size="sm" onClick={onButtonClicked}/>
        </div>
    )
};

const NoAlbumsSection = ({onButtonClicked}) => {

    return (
        <div className="mx-auto">
            <h3 className="font-bold">You dont have albums yet!</h3>
            <Button text="Add Album" variant="info" size="sm" onClick={onButtonClicked}/>
        </div>
    )
};

const User = ({stateData, getSingleUser, match, showModal}) => {

    const [key, setKey] = useState('photos');
    const id = match.params.id;

    const addAnimal = () => {
        showModal(AddAnimalForm)
    }

    const addAlbum = () => {
        showModal(UploadAlbumForm)
    }

    const addReminder = () => {
        showModal(ReminderForm)
    }

    useEffect(() => {
        getSingleUser(id);
    }, [getSingleUser, id]);

    return (
        <div id="user_profile" className="container mt-5 pt-5">
            {
                stateData.loading === false ?
                    <UserBio user={stateData.model}/> :
                    <UserBioLoadingAnimation/>
            }


            <Tabs
                className="my-5"
                id="user-profile"
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab eventKey="photos" title="Photos">
                    <DropFileWithButton/>
                    <div className="row">
                        {stateData.loading === false ? stateData.model.images.map((photo, index) =>

                                <Photo key={`photos_${index}`} model={photo}/>
                            ) :
                            <PhotoLoadingAnimationBar/>}
                    </div>
                </Tab>

                <Tab eventKey="pets" title="Pets">
                    {(stateData.loading === false && stateData.model.pets.length > 0) && <Button text=" + Add More Pets"
                                                                                                 variant="info"
                                                                                                 size="sm"
                                                                                                 onClick={addAnimal}
                                                                                                 className="my-3"/>}

                    <div className="row">
                        {stateData.loading === false ?
                            stateData.model.pets.length > 0 ? stateData.model.pets.map((pet, index) =>
                                    <div key={`pet_${index}`} className="col-lg-4 col-md-6 mb-4">
                                        <Pet model={pet} id={id} />
                                    </div>
                                ) :
                                <NoPetsSection onButtonClicked={addAnimal}/>
                            :
                            <PetLoadingAnimationBar/>}
                    </div>
                </Tab>

                <Tab eventKey="reminder" title="Reminder">
                    <div className="col-md-6 mx-auto my-4">
                        <Button text="+ Add Reminder" variant="info" size="sm" onClick={addReminder}/>
                    </div>
                    <Reminder />
                </Tab>

                <Tab eventKey="albums" title="Albums">
                    <div className="row">
                        {stateData.loading === false ?
                                    stateData.model.albums.length > 0 ? stateData.model.albums.map((album, index) =>
                                        <Album key={`album_${index}`} model={album}/>
                                        ) :
                                        <NoAlbumsSection onButtonClicked={addAlbum}/>
                                    :
                                    <AlbumLoadingAnimationBar/>}
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateData: state.singleUserPage
});

const mapDispatchToProps = (dispatch) => ({
    getSingleUser: (id) => {
        dispatch(getSingleUser(id));
    },
    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
