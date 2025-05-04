/**
 * Range input avec un libellé sur le dessus
 * 
 * @param {n:number => void} onChange
 * @param {string} id
 * @param {string} label
 * @param {number} value
 * @returns 
 */
export function Range({onChange, id, label, value}) {
    return <div className="range">
        <label htmlFor={id}>{label}</label>
        <input 
            className="mx-3"
            type="range" 
            id={id} 
            onChange={(e) => onChange(e.target.value)} 
            value={value}
            min={0}
            max={5}
        />
    </div>
}