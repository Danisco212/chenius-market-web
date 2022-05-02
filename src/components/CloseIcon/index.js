import "./style.css"

export function CloseIcon({action, color = 'white'}) {
    return (
        <div onClick={action} style={{
            height: 40,
            width: 40,
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <div style={
                {
                    position: 'absolute',
                    width: 30,
                    height: 5,
                    backgroundColor: color,
                    borderRadius: 5,
                    transform: 'rotate(45deg)'
                }
            } />
            <div style={
                {
                    position: 'absolute',
                    width: 30,
                    height: 5,
                    backgroundColor: color,
                    borderRadius: 5,
                    transform: 'rotate(-45deg)'
                }
            } />
        </div>
    )
}