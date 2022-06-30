import { useState } from 'react'
import { deviceType } from '../../utils/metrics'
import { ContactForm } from '../ContactForm'
import { FooterButton } from '../FooterButton'
import { FooterData } from '../FooterData'
import { SocialIcon } from '../SocialIcon'
import './style.css'

export function Footer() {
    const [showContact, setShowContact] = useState(false);
    return (
        <div id='footer' style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1B1B1B'
        }}>
            <div style={{
                height: deviceType() !== 'desktop' ? 300 : 200,
                display: 'flex',
                flexDirection: deviceType() !== 'desktop' ? 'column' : 'row',
                justifyContent: deviceType() !== 'desktop' ? 'space-around' : 'space-between',
                alignItems: 'center',
                width: deviceType() === 'desktop' ? 1200 : '80%'
            }}>

                <FooterButton action={setShowContact.bind(this, true)} label={"Make An Enquiry?"} />

                <h1 style={{
                    margin: 0,
                    color: 'white',
                    fontSize: deviceType() !== 'desktop' ? 25 :  35,
                    fontFamily: 'MPlus-Black'
                }}>Get In Contact?</h1>

                <div style={{
                    width: 150,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <SocialIcon icon={"gg-twitter"} />
                    <SocialIcon icon={"gg-facebook"} />
                    <SocialIcon icon={"gg-instagram"} />
                </div>

            </div>

            <div style={{
                width: '100vw',
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: '#161616',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <FooterData title={"Call"} data="+855 69 523 756" />
                    <FooterData title={"Email"} data="info@misterisaac.digital" />
                </div>
            </div>

            <div style={{
                paddingTop: 20,
                paddingBottom: 20,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}>
                <p style={{
                    color: 'white',
                    textAlign: 'center',
                    display: 'inline-block',
                    width: '70%'
                }}>© {new Date().getFullYear() + " Chenius Creative All Rights Reserved"}</p>
            </div>
            {showContact && <ContactForm close={setShowContact.bind(this, false)} />}
        </div>
    )
}