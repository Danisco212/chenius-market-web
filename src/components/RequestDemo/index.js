import React, { useState } from "react";
import { ContactForm } from "../ContactForm";
import { FooterButton } from "../FooterButton";

const RequestDemo = () =>{
    const [showContact, setShowContact] = useState(false)
    const toLocation = () => {
        window.location.href = 'https://calendly.com/daniel-chisaac/30min'
    }
    return(
        <div style={{
            backgroundColor: '#1B1B1B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 20,
            marginBottom: 20,
        }}>
            <p style={{color: "white", fontWeight: '600'}}>Wan't to see some samples? Request a demo at anytime of your convenience</p>
            <FooterButton action={toLocation} label={"Request Demo"} />
            {showContact && <ContactForm close={setShowContact.bind(this, false)} />}
        </div>
    )
}

export default RequestDemo