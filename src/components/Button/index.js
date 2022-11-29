export function Button({label, action, active = true}){
    return(
        <button style={{
            width: 200,
            height: 50,
            cursor: 'pointer',
            border: '1px solid #E9204F',
            backgroundColor: active ? '#E9204F' : '#808080',
            color: 'white',
            fontSize: 15,
            fontFamily: 'Mplus-Bold'
        }} onClick={active ? action : () => {}}>{label}</button>
    )
}