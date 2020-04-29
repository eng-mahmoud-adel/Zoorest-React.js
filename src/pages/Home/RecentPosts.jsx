import React, {useState} from 'react';
import PostImage from '../../images/assets/images/Group 22@3x.png';
import Tabs from 'react-bootstrap/Tabs';
import Post from '../../components/Cards/Posts/Post';
import Tab from "react-bootstrap/Tab";
import LazyLoad from "react-lazyload";
import {Text32} from "../../components/UI/Typography";

const RecentPosts = (props) => {
    const data = props.data;
    const [key, setKey] = useState(Object.keys(data)[0]);

    return (
        <div className="row">
            <div className="title d-lg-none">

                <Text32>
                    Join the Largest Community for adoption and lost Pets
                </Text32>

            </div>

            <div className="col-lg-6 mt-5">
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={PostImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
            <div className="col-lg-6">
                <div className="title d-none d-lg-block">
                    <Text32>
                        Join the Largest Community for adoption and lost Pets
                    </Text32>
                </div>

                <Tabs id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-4">

                    {
                        Object.keys(data).map((key, index1) => {
                            return (
                                <Tab key={index1} eventKey={key} title={key}>
                                    {data[key].data.length > 0 && <Post model={data[key].data[0]}/>}
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
