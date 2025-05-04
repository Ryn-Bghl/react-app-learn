/**
 * @param {bool} checked 
 * @param {(s: string) => void} onChange 
 * @param {string} label 
 */
export function Checkbox({checked, onChange, label}) {
    return <div>
        <input 
        type="checkbox" 
        className="form-check-input" 
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        />
        <label className="form-checked-label">{label}</label>
    </div>
}