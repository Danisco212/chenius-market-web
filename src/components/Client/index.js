import { deviceType } from "../../utils/metrics";

export function Client({image}){
    return(
        <img style={{
            marginBottom: deviceType() !== 'desktop' ? 30 : 0,
            flex: deviceType() !== 'desktop' ? 1/2 : 'unset',
        }} src={image} alt="" />
    )
}