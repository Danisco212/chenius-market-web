import { deviceType } from "../../utils/metrics"
import { Button } from "../Button"
import { CloseIcon } from "../CloseIcon"
import { FormInput } from "../FormInput"
import { FormLabel } from "../FormLabel"
import { Spacer } from "../Spacer"
import "./style.css"

const FORM_SPACER = 10

export function ContactForm({close}) {
    return (
        <div style={{
            transition: '1s !important',
            overflow: 'scroll',
            width: '100vw',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                marginTop: 40,
                width: deviceType() !== 'desktop' ? '90%' : 1200,
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h1 style={{
                            fontSize: deviceType() !== 'desktop' ? 25 : 35,
                            margin: 0,
                            fontFamily: 'MPlus-Black'
                        }}>Get In Contact?</h1>
                        <p style={{
                            fontSize: deviceType() !== 'desktop' ? 13 : 16,
                            margin: 0,
                        }}>Let’s make something awesome togheter</p>
                    </div>
                    <CloseIcon action={close} color="red" />
                </div>

                <form style={{
                    marginTop: 40
                }}>
                    <div>
                        <FormLabel label={"Your Name"} />
                        <FormInput />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Email"} />
                        <FormInput />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Subject"} />
                        <FormInput />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Message"} />
                        <FormInput large={true} />
                    </div>
                    <Spacer height={20} />
                    <Button label={"Send Message"} />
                </form>
                <Spacer height={30} />
            </div>
        </div>
    )
}