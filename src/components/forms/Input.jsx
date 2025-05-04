/**
 * 
 * @param {string} placeHolder 
 * @param {string} value
 * @param {(s: string) => void} onChange 
 */
export function Input({placeHolder, value, onChange}) {
    return <div>
        <input 
            type="text" 
            className="form-control"
            value={value}
            placeholder={placeHolder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}