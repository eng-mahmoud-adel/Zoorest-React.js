import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getSinglePet} from '../../../../store/actions/pet';
import SlickSlider from '../../../../components/Helpers/SlickSlider';
import Card from "react-bootstrap/Card";

const PetDetails = ({stateData, getSinglePet, match}) => {

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
        //centerMode: true,
        centerPadding: '200px',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 2,
                    //centerMode: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    };

    useEffect(() => {
        getSinglePet(id);
    }, [getSinglePet, id]);

    return (
        <div className="container">
            
            {stateData.loading === false && (
            <Fragment>
                <div>
                    <h2>Animal Name: {stateData.model.name}</h2>
                    <p className="label">{`Date of Birth: ${stateData.model.birth_date}`}</p>
                </div>

                <div>Photos (20)</div>

                <SlickSlider settings={slickSettings}>
                    {stateData ? stateData.model.images.map((image, index) => (
                        <Card className="photo-card">
                            <div>
                                <Card.Img src={image} />
                            </div>
                        </Card>
                    )) : <h1>loading</h1>}
                </SlickSlider>

                <div>
                    <h6 className="font-weight-bold">Certificates &amp; Prescription</h6>
                    {stateData.model.certificates.map((certificate, index) => (
                        <Card className="certificate-card">
                            <div>
                                <Card.Img src={certificate.path} />
                            </div>
                        </Card>
                    ))}
                </div>

                <div>
                    <h6 className="font-weight-bold">Vaccinations</h6>
                    {stateData.model.transcriptions.map((transcription, index) => (
                        <Card className="transcription-card">
                            <div>
                                <Card.Img src={transcription.path} />
                            </div>
                        </Card>
                    ))}
                </div>
            </Fragment>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateData: state.singlePetPage
});

const mapDispatchToProps = (dispatch) => ({
    getSinglePet: (id) => {
        dispatch(getSinglePet(id));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
