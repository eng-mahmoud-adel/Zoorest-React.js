import React, {useState} from 'react';
import PostImage from '../../images/assets/Group 22@3x.png';
import Tabs from 'react-bootstrap/Tabs';
import Post from '../../components/Cards/Posts/Post';
import Tab from "react-bootstrap/Tab";

const RecentPosts = (props) => {
    const data = props.data;
    const [key, setKey] = useState(Object.keys(data)[0]);

    return (
        <div className="row">
            <h1 className="title font-weight-bold d-lg-none">Join the Largest Community for adoption and lost Pets</h1>

            <div className="col-lg-6 mt-5">
                <img src={PostImage} alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-6">
                <h1 className="title font-weight-bold d-none d-lg-block">Join the Largest Community for adoption and
                    lost Pets</h1>

                <Tabs id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}>

                    {
                        Object.keys(data).map((key, index1) => {
                            return (
                                <Tab key={index1} eventKey={key} title={key}>
                                    {data[key].length > 0 && <Post data={data[key][0]}/>}
                                </Tab>
                            )
                        })
                    }

                </Tabs>
            </div>
        </div>
    );
};

export default RecentPosts;
