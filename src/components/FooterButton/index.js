import "./style.css"

export function FooterButton({label, action}){
    return(
        <button className="ch-footer-button" style={{
            width: 200,
            height: 50,
            cursor: 'pointer',
            border: '1px solid #E9204F',
            color: 'white',
            fontSize: 15,
            fontFamily: 'Mplus-Bold'
        }} onClick={action}>
            {label}
        </button>
    )
}