import React, { Component } from 'react';
import RenderCombinedButtons from './RenderCombinedButtons';
import RenderBigButtons from './RenderBigButtons';
import RenderSmallButtons from './RenderSmallButtons';



class About extends Component {
    render() {
        return (
            <div className="container">
                <RenderBigButtons />
                <RenderSmallButtons />
                <RenderCombinedButtons />
            </div>
        )
    }
}

export default About;