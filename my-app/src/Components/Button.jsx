function Button({ 
    onClick, 
    children, 
    disabled 
}) {
  return (
    <button
      style={{
        padding: "1rem",
        border: 0,
        borderWidth: 0,
        fontWeight: "bold",
        backgroundColor: "teal",
        color: "white",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
