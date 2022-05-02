import "./style.css"

export function FormInput({ placeholder = "", value, onChange, large=false }) {
    if (large) {
        return (
            <textarea value={value} onChange={onChange} placeholder={placeholder} style={{
                margin: 0,
                padding: '10px 20px',
                height: 300,
                boxSizing: 'border-box',
                border: '1px solid #8080804A',
                borderRadius: '5px',
                width: '100%'
            }} />
        )
    }
    return (
        <input style={{
            margin: 0,
            padding: '10px 20px',
            height: 45,
            boxSizing: 'border-box',
            border: '1px solid #8080804A',
            borderRadius: '5px',
            width: '100%'
        }} value={value} onChange={onChange} placeholder={placeholder} />
    )
}