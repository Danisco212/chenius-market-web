import "./style.css"

const lineStyle = {
    height: 5,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: 2,
    marginBottom: 5
}

export function HamburgerIcon({action}){
    return(
        <div style={{cursor: 'pointer'}} onClick={action}>
            <div style={lineStyle} />
            <div style={lineStyle} />
            <div style={lineStyle} />
        </div>
    )
}