import "./style.css"

export function MenuItem({label, action, side=false}){
    return(
        <h3 style={{
            fontSize: side ? 24 : 18
        }} className="ch-menu-item">{label}</h3>
    )
}