import React from "react";
import { deviceType } from "../../utils/metrics";
import { Spacer } from "../Spacer";
import "./style.css"

const Services = () => {
    return (
        <div id="services" style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: deviceType() !== 'desktop' ? '90%' : 1200,
            }}>
                <div style={{
                    display: deviceType() !== 'desktop' ? 'block' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <h1 style={{
                            fontFamily: 'MPlus-Black',
                            fontSize: 35,
                            margin: 0,
                        }}>Services</h1>
                        <p style={{
                            margin: 0,
                            color: '#E9204F'
                        }}>Your ideas, our passion</p>
                    </div>
                    <p style={{
                        fontFamily: 'MPlus-Medium',
                        fontSize: 20,
                        display: 'inline-block',
                        width: deviceType() !== 'desktop' ? 'unset' : '60%'
                    }}><span style={{
                        color: '#E9204F',
                        fontFamily: 'MPlus-Bold'
                    }}>Chenius Solutions</span> offers the best in Mobile application development, Web development and Web application development. We are proficient in the entire workflow to bring your idea into the market at the best quality, with the latest technology and at the greatest speed.</p>
                </div>
                <Spacer height={40} />
                {/* <div style={{
                    display: deviceType() !== 'desktop' ? 'block' : 'flex',
                    flexDirection: 'row',
                    margin: 'auto',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}>
                    <AboutSection fullHeight={false} image={images.appDev} title={"Mobile Application Development"} />
                    <Spacer width={40} />
                    <AboutSection fullHeight={false} image={images.webDev} title={"Web Development"} />
                </div> */}
            </div>
        </div>
    )
}

export default Services