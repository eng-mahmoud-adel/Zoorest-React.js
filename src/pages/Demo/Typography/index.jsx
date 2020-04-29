import React from 'react'
import "../../../components/UI/Typography"
import *  as Typography from "../../../components/UI/Typography";

const TypographyPage = props => {
    return (
        <div className="container">

            <div style={{height: 150}} className="row">
                <Typography.Text64>Typography.</Typography.Text64>
            </div>

            <div style={{height: 200}} className="row">
                <div className="col-2 align-items-center">
                    <Typography.Text14>Size: 64px</Typography.Text14>
                    <Typography.Text14>Line: 80px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text64>Welcome to ZooRest the best online platform for your pets.</Typography.Text64>
                </div>
            </div>
            <div style={{height: 200}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 48px</Typography.Text14>
                    <Typography.Text14>Line: 64px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text48>Welcome to ZooRest the best online platform for your pets.</Typography.Text48>
                </div>
            </div>

            <div style={{height: 170}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 32px</Typography.Text14>
                    <Typography.Text14>Line: 48px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text32>Welcome to ZooRest the best online platform for your pets.</Typography.Text32>
                </div>
            </div>

            <div style={{height: 160}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 24px</Typography.Text14>
                    <Typography.Text14>Line: 36px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text24>Welcome to ZooRest the best online platform for your pets.</Typography.Text24>
                </div>
            </div>

            <div style={{height: 150}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 18px</Typography.Text14>
                    <Typography.Text14>Line: 28px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text18Medium>Welcome to ZooRest the best online platform for your
                        pets.</Typography.Text18Medium>
                </div>
            </div>
            <div style={{height: 140}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 16px</Typography.Text14>
                    <Typography.Text14>Line: 24px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text16Regular>Welcome to ZooRest the best online platform for your
                        pets.</Typography.Text16Regular>
                </div>
            </div>
            <div style={{height: 130}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 14px</Typography.Text14>
                    <Typography.Text14>Line: 22px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text14>Welcome to ZooRest the best online platform for your pets.</Typography.Text14>
                </div>
            </div>
            <div style={{height: 120}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 12px</Typography.Text14>
                    <Typography.Text14>Line: 18px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text12>Welcome to ZooRest the best online platform for your pets.</Typography.Text12>
                </div>
            </div>
            <div style={{height: 110}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 10px</Typography.Text14>
                    <Typography.Text14>Line: 14px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text10>Welcome to ZooRest the best online platform for your pets.</Typography.Text10>
                </div>
            </div>
            <div style={{height: 100}} className="row">
                <div className="col-2">
                    <Typography.Text14>Size: 8px</Typography.Text14>
                    <Typography.Text14>Line: 12px</Typography.Text14>
                </div>
                <div className="col-10">
                    <Typography.Text08>Welcome to ZooRest the best online platform for your pets.</Typography.Text08>
                </div>
            </div>

        </div>
    );
};

export default TypographyPage;
