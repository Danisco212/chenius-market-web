import { images } from "../../assets"
import { deviceType } from "../../utils/metrics"
import { FooterButton } from "../FooterButton"
import { Spacer } from "../Spacer"
import "./style.css"

function toLocation(location){
    window.location.href = "#"+location
}

export function HeroBox() {
    return (
        <div style={{
            paddingTop: 110,
            width: '100vw',
            height: deviceType() !== 'desktop' ? '85vh' : '85vh',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                position: 'relative',
                width: deviceType() !== 'desktop' ? '90%' : 1200
            }}>
                <Spacer height={80} />
                <div style={{
                    width: deviceType() !== 'desktop' ? 'unset' : '60%'
                }}>
                    <h1 style={{
                        margin: "10px 0px",
                        color: 'white',
                        fontSize: 50,
                        fontFamily: 'MPlus-Black'
                    }}>Advanced Technology Solutions</h1>
                    <FooterButton action={toLocation.bind(this, "contact")} label={"Get Started"} />
                </div>
                {deviceType() === 'desktop' && (
                    <img alt="" style={{
                        top: -20,
                        right: -150,
                        height: 500,
                        position: 'absolute'
                    }} src={images.hero} />
                )}
            </div>
        </div>
    )
}