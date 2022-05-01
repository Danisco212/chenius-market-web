import { deviceType } from "../../utils/metrics"
import "./style.css"

export function FooterData({title, data}){
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <h3 style={{
                textAlign:'center',
                color: 'white',
                margin: 0,
                fontSize: deviceType() !== 'desktop' ? 17 : 25,
            }}>{title}</h3>
            <p style={{
                textAlign: 'center',
                color: 'white',
                margin: 0,
                fontSize: deviceType() !== 'desktop' ? 13 : 18,
            }}>{data}</p>
        </div>
    )
}