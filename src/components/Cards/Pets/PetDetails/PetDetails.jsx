import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSingleUser} from '../../../../store/actions/user';
import SlickSlider from '../../../../components/Helpers/SlickSlider';


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
            <div>
                {stateData.loading === false && stateData.model.pets.map(pet => <h4>{pet.name}</h4>)}
                <p className="label">{`Date of Birth: `}</p>
            </div>

            <div>Photos (20)</div>
            
            {/* <SlickSlider settings={slickSettings}>
                {stateData ? stateData.model.pets.map((pet, index) => (
                    <Pet key={index} model={pet} className="pet-card"/>
                )) : <h1>loading</h1>}
            </SlickSlider> */}

            <div>
                <h6>Certificates &amp; Prescription</h6>
            </div>

            <div>
                <h6>Vaccinations</h6>
            </div>
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
