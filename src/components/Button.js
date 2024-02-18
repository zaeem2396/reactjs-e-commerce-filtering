export default function Button({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
}

// can be exported using this method also  
// export default Button
