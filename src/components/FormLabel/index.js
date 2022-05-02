import "./style.css"

export function FormLabel({ label, optional = false }) {
    return (
        <p style={{
            fontSize: 16,
            fontFamily: 'MPlus-Bold',
            marginBottom: 5,
        }}>{label} <p style={{
            display: optional ? 'none' : 'unset',
            color: 'red'
        }}>*</p></p>
    )
}