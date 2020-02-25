import React, {Component, Fragment} from 'react';


class HomeContainer extends Component {
    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <Fragment>
                <section id="middle-section" className="row">
                    <div className="col-3">
                        <img src="images/mobile-app.png" id="mobile-app" alt=""/>
                    </div>
                    <div className="col-9">
                        <h1>نحن نعمل معا من</h1>
                        <br/>
                        <h1>اجل الحيوانات الاليفة</h1>
                        <br/>
                        <h2>قم بتحميل التطبيق الان واستمتع بتجربةالخدمة</h2>
                    </div>
                </section>

                <section id="bottom-section">
                    <div id="blue-bar" className="d-flex justify-content-center">
                        <a href="#">
                            <img src="images/app-store.png" alt=""/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.memoseed.zoorest&fbclid=IwAR0N9VdP1fnKsHvj-S0Wc5WxmWs9PIhtv411_Cp9pf4Cn4atOyPzc--I-dg"
                           target="_blank">
                            <img src="images/play-store.png" alt=""/>
                        </a>
                    </div>
                    <img src="images/walking-dog.png" alt="" id="walking-dog"/>
                </section>

                <main role="main" className="container">


                </main>
            </Fragment>
        );
    }
}

export default HomeContainer;
