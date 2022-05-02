import { deviceType } from "../../utils/metrics"
import "./style.css"

export function WhatClientsSay() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                marginBottom: 30,
                width: deviceType() !== 'desktop' ? '90%' : 1200,
                display: deviceType() !== 'desktop' ? 'block' : 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1 style={{
                    fontFamily: 'MPlus-Black',
                    fontSize: 35,
                    display: 'inline-block',
                }}>What Clients Say</h1>
                <div style={{
                    width: deviceType() !== 'desktop' ? 'unset' : '60%'
                }}>
                    <p style={{
                        fontFamily: 'MPlus-Medium',
                        fontSize: 20,
                    }}><span style={{fontFamily: 'MPlus-Black'}}>"</span>We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous and sustainable growth of our clients.<span style={{fontFamily: 'MPlus-Black'}}>"</span></p>
                    <p style={{
                        margin: 0,
                        fontFamily: 'MPlus-Bold',
                        color: '#E9204F'
                    }}>- Adam Whitaker</p>
                </div>
            </div>
        </div>
    )
}