import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import ProfileAvatar from "../../components/Avatars/ProfileAvatar";
import {Tab, Tabs} from 'react-bootstrap';
import {getSingleUser} from '../../store/actions/user';
import Photo from '../../components/Cards/Photos/Photo';
import {PhotoLoadingAnimationBar} from '../../components/Cards/Photos/LoadingAnimations/Photo';
import Pet from '../../components/Cards/Pets/Pet';
import {PetLoadingAnimationBar} from '../../components/Cards/Pets/LoadingAnimations/Pet';
import DropFileWithButton from '../../components/Forms/DropFiles/DropFileWithButton';

const User = ({stateData, getSingleUser, match}) => {

    const [key, setKey] = useState('animals');
    const id = match.params.id;

    useEffect(() => {
        getSingleUser(id);
    }, [getSingleUser, id]);

    return (
        <div id="user_profile" className="container mt-5 pt-5">
                {
                    stateData.loading === false && 
                    
                    <div className="provider-image">
                        <ProfileAvatar model={stateData.model} withName={true} withJoiningDate={true}/>
                        {/* <p>{stateData.model.description}</p> */}
                    </div>
                }

                <Tabs
                    className="my-5"
                    id="user-profile"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="photos" title="photos">
                        <DropFileWithButton />
                        <div className="row">
                            {stateData.loading === false ? stateData.model.images.map(photo => <Photo model={photo} />) :
                                <PhotoLoadingAnimationBar/>}
                        </div>
                    </Tab>

                    <Tab eventKey="animals" title="Animals">
                        <div className="row">
                            {stateData.loading === false ? stateData.model.pets.map(pet => <Pet model={pet} />) : <PetLoadingAnimationBar />}
                        </div>
                    </Tab>

                    <Tab eventKey="reminder" title="Reminder">

                    </Tab>

                    <Tab eventKey="albums" title="albums">
                        {/* {stateData.loading === false ? stateDate.model.albums.map(album => <Album model={album} />) : <AlbumLoadingAnimationBar />} */}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
