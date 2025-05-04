/**
 * Checkbox avec un libellé sur la droite
 * @param {bool} checked 
 * @param {(v: boolean) => void} onChange 
 * @param {string} label 
 * @param {string} id 
 */
export function Checkbox({checked, onChange, label, id}) {
    return <div className="form-check">
        <input 
        id={id}
        type="checkbox" 
        className="form-check-input" 
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor={id} className="form-checked-label">{label}</label>
    </div>
}