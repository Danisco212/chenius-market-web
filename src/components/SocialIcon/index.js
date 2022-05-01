import "./style.css"

export function SocialIcon({icon, action}) {
    return (
        <div onClick={action} className="ch-footer-icon" style={{
            cursor: 'pointer',
            transition: '0.25s ease-in',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #E9204F',
            borderRadius: 20,
            height: 40,
            width: 40,
            color: 'white',
        }}>
            <i class={icon}></i>
        </div>
    )
}