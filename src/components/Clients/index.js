import { images } from "../../assets/images"
import { deviceType } from "../../utils/metrics"
import { Client } from "../Client"
import { Spacer } from "../Spacer"
import "./style.css"

export function Clients() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }} id="clients">
            <div style={{
                width: deviceType() !== 'desktop' ? '90%' : 1200,

            }}>
                <Spacer height={ deviceType() !== 'desktop' ? 50 : 100} />
                <div>
                    <h1 style={{
                        fontFamily: 'MPlus-Black',
                        fontSize: 35,
                        margin: 0,
                    }}>Our Clients</h1>
                    <p style={{
                        fontSize: 16,
                        margin: 0,
                        color: '#E9204F'
                    }}>From Around The World</p>
                </div>
                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection :'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <Client image={images.yoga} />
                    <Client image={images.chesire} />
                    <Client image={images.banana} />
                    <Client image={images.autospeed} />
                </div>
                <Spacer height={ deviceType() !== 'desktop' ? 50 : 100} />
            </div>
        </div>
    )
}