export default function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{background: color}}></span> {title}
    </label>
  )
}

// can be exported using this method also  
// export default Input