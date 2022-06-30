import { images } from "../../assets"
import "./style.css"

export function Logo({size}){
    return(
        <img height={size} width={size} src={images.fullLogo} alt=""/>
    )
}