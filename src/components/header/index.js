import React, { useState } from 'react'
import { deviceType } from '../../utils/metrics'
import { HamburgerIcon } from '../HamburgerIcon'
import { Logo } from '../Logo'
import { MenuItem } from '../MenuItem'
import { SideMenu } from '../SideMenu'
import './header.css'

const headerStyle = {
    backgroundColor: 'black',
    height: 110,
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}

const containerStyle = {
    width: deviceType() === 'desktop' ? 1200 : '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const menuHolderStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export function Header() {
    const [sideOpen, setSideOpen] = useState(false)

    return (
        <div style={headerStyle} className='che-header'>
            <div style={containerStyle} className='container ch-container'>
                <Logo size={50} />

                {deviceType() === 'desktop'
                    ?
                    <div style={menuHolderStyle} className='ch-menu'>
                        <MenuItem label="Home" />
                        <MenuItem label="Services" />
                        <MenuItem label="Works" />
                        <MenuItem label="About" />
                        <MenuItem label="Clients" />
                        <MenuItem label="Contact" />
                    </div>
                    :
                    <HamburgerIcon action={setSideOpen.bind(this, true)} />
                }
            </div>
            {deviceType() !== 'desktop' && (
                <SideMenu close={setSideOpen.bind(this, false)} sideOpen={sideOpen} />
            )}
        </div>
    )
}