import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getSingleUser} from '../../../../store/actions/user';
import SlickSlider from '../../../../components/Helpers/SlickSlider';
import Card from "react-bootstrap/Card";


const PetDetails = ({stateData, getSingleUser, match}) => {

    const id = match.params.id;

    const slickSettings = {
        rtl: false,//todo use variable when site localization is added
        dots: true,
        infinite: true,
        arrows: false,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '200px',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 2,
                    centerMode: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    };

    useEffect(() => {
        getSingleUser(id);
    }, [getSingleUser, id]);

    return (
        <div className="container">
            
            {stateData.loading === false && stateData.model.pets.map(pet => 
            <Fragment>
                <div>
                    <h2>Animal Name: {pet.name}</h2>
                    <p className="label">{`Date of Birth: ${pet.birth_date}`}</p>
                </div>

                <div>Photos (20)</div>

                <SlickSlider settings={slickSettings}>
                    {stateData ? stateData.model.pets.map((pet, index) => (
                        <Card className="photo-card">
                            <div>
                                <Card.Img src={pet.images.map(img => img._path_small)} />
                            </div>
                        </Card>
                    )) : <h1>loading</h1>}
                </SlickSlider>

                <div>
                    <h6 className="font-weight-bold">Certificates &amp; Prescription</h6>
                    <img src={pet.certificates} />
                </div>

                <div>
                    <h6 className="font-weight-bold">Vaccinations</h6>
                    <img src={pet.transcriptions} />
                </div>
            </Fragment>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
