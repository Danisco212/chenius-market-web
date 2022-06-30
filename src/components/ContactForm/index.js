import { deviceType } from "../../utils/metrics"
import { Button } from "../Button"
import { CloseIcon } from "../CloseIcon"
import { FormInput } from "../FormInput"
import { FormLabel } from "../FormLabel"
import { Spacer } from "../Spacer"
import emailjs from "@emailjs/browser";

import "./style.css"
import { useRef } from "react"

const FORM_SPACER = 10

export function ContactForm({ close }) {
    const form = useRef();

    const handleSumit = e => {
        e.preventDefault();
        emailjs.sendForm('service_8xyba0y', 'template_tbdxjg6', form.current, 'EEza8YDuOckHrzYjj')
            .then((result) => {
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div style={{
            transition: '1s !important',
            overflow: 'scroll',
            width: '100vw',
            top: 80,
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

                <form ref={form} onSubmit={handleSumit} style={{
                    marginTop: 40
                }}>
                    <div>
                        <FormLabel label={"Your Name"} />
                        <FormInput name="user_name" type="text" />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Email"} />
                        <FormInput type="email" name="user_email" />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Subject"} />
                        <FormInput type="text" name="subject" />
                    </div>
                    <Spacer height={FORM_SPACER} />
                    <div>
                        <FormLabel label={"Your Message"} />
                        <FormInput name="message" type="text" large={true} />
                    </div>
                    <Spacer height={20} />
                    <Button label={"Send Message"} />
                </form>
                <Spacer height={30} />
            </div>
        </div>
    )
}