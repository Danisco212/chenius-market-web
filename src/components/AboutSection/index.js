import { deviceType } from "../../utils/metrics"
import "./style.css"

export function AboutSection({title, body, image, fullHeight = true}){
    return(
        <div style={{
            flex: deviceType() !== 'desktop' ? 'unset' : 1/3,
            minHeight: fullHeight ? 600 : 'unset',
            width: deviceType() !== 'desktop' ? '100%' : 'unset',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div style={{
                height: 400,
                background: 'url(' + image + ')',
                backgroundSize: 'cover',
                backgroundPositionX: -50,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundColor: 'transparent'
            }}>

            </div>
            <div style={{
                alignSelf: 'center',
                width: '80%'
            }}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}