/**
 * Range input avec un libellé sur le dessus
 * 
 * @param {*} param0 
 * @returns 
 */
export function Range({onChange, id, label}) {
    return <div className="range">
        <label htmlFor={id}>{label}</label>
        <input type="range" id={id} onChange={(e) => onChange(e.target.value)} />
    </div>
}