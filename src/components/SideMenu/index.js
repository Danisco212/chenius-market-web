import React, { useEffect, useRef } from "react"
import { CloseIcon } from "../CloseIcon"
import { MenuItem } from "../MenuItem"
import "./style.css"


export function SideMenu({sideOpen, close}) {
    function toLocation(location){
        close()
        setTimeout(()=>{
            window.location.href = "#"+location
        }, 300)
    }

    const holdRef = useRef();

    useEffect(()=>{
        if(sideOpen){
            holdRef.current.classList.remove("ch-side-close")
        }else{
            holdRef.current.classList.add("ch-side-open")
        }
    }, [sideOpen])

    return (
        <div ref={holdRef} className="ch-side-menu" style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 100,
            left: sideOpen ? 0 : window.innerWidth,
            transition: '0.25s ease-in',
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black'
        }}>
            <div style={{
                marginTop: 20,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <CloseIcon action={close} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <MenuItem side action={toLocation.bind(this, "")} label="Home" />
                <MenuItem side action={toLocation.bind(this, "services")} label="Services" />
                {/* <MenuItem side action={toLocation.bind(this, "works")} label="Works" /> */}
                <MenuItem side action={toLocation.bind(this, "about")} label="About" />
                <MenuItem side action={toLocation.bind(this, "clients")} label="Clients" />
                <MenuItem side action={toLocation.bind(this, "contact")} label="Contact" />
            </div>
        </div>
    )
}