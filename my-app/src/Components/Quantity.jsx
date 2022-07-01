import Button from "./Button";

function Quantity({ qty, decrementCount, incrementCount }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Button onClick={decrementCount}>-</Button>
      <div>
        <h4>{qty}</h4>
      </div>
      <Button onClick={incrementCount}>+</Button>
    </div>
  );
}

export default Quantity;
