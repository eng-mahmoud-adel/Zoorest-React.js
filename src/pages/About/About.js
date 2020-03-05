import React, { Component } from 'react';
import RenderCombinedButtons from './RenderCombinedButtons';
import RenderBigButtons from './RenderBigButtons';
import RenderSmallButtons from './RenderSmallButtons';
import RenderCheckBox from './RenderCheckBox';
import RenderTags from './RenderTags';
import RenderAlerts from './RenderAlerts';
import RenderTabs from './RenderTabs';
import RenderInput from './RenderInput';
import RenderDropdown from './RenderDropdown';



class About extends Component {
    render() {
        return (
            <div className="container">
                <RenderBigButtons />
                <RenderSmallButtons />
                <RenderCombinedButtons />
                <RenderCheckBox />
                <RenderTags />
                <RenderAlerts />
                <RenderTabs />
                <RenderInput />
                <RenderDropdown />
            </div>
        )
    }
}

export default About;