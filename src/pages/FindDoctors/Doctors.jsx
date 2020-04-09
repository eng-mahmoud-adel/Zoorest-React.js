import React from 'react';
import { connect } from 'react-redux';
import Provider from '../../components/Cards/Profiles/Provider';
import CheckBox from '../../components/Buttons/CheckBoxes/CheckBox';
import BasicInput from '../../components/Inputs/BasicInput';
import BillBoard from '../../components/Cards/BillBoard/BillBoard';

const Doctors = (props) => {
    const {providers}= props;
    return (
        <div className= "container mt-5">
            <section className= "title">
                <h1 className= "font-weight-bold">Doctors and Clinics</h1>
                <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction.</p>
            </section>

            <section className= "pro-doctors">
                <div className= "mb-3">(213) Doctor</div>
                <div className= "row">
                    <div className= "col-md-2">
                        <span>Country:</span>
                    </div>
                    <div className= "col-md-2">
                        <span>Governrate:</span>
                    </div>
                    <div className= "col-md-2">
                        <span>Rating:</span>
                    </div>
                    <div className= "col-md-3">
                        <CheckBox text= "Show only nearby doctors" id= "customCheck1" />
                    </div>
                    <div className= "col-md-3">
                        <BasicInput className= "basic-input" type= "text" right_icon= "fa fa-search fa-lg" placeholder= "Start searching for anything" />
                    </div>
                </div>
                <div className="row">
                    {providers && providers.map((provider, index) => (
                        <div className="col-lg-4 col-md-6 mb-3 mb-lg-0" key={index}>
                            <Provider provider={provider} className="shadow-lg" cardTitle="Helen Figueroa"
                                cardText="Here, I focus on a range of items and features that we use in life without giving them"
                                icon="fa fa-eye" number="2312 Views"/>
                        </div>
                    ))}
                </div>
            </section>

            <section className= "col-md-10 mx-auto my-5">
                <BillBoard />
            </section>

            <section className= "normal-doctors">
                <div className="row">
                    {providers && providers.map((provider, index) => (
                        <div className="col-lg-4 col-md-6 mb-3 mb-lg-0" key={index}>
                            <Provider provider={provider} className="shadow-lg my-3" cardTitle="Helen Figueroa"
                                cardText="Here, I focus on a range of items and features that we use in life without giving them"
                                icon="fa fa-eye" number="2312 Views"/>

                            <Provider provider={provider} className="shadow-lg" cardTitle="Helen Figueroa"
                            cardText="Here, I focus on a range of items and features that we use in life without giving them"
                            icon="fa fa-eye" number="2312 Views"/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    providers: state.providers.sponsored.slice(0, 3)
})

export default connect(mapStateToProps)(Doctors);
