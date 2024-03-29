import CartItem from "./CartItem";
import Total from "./Total";
import { useState } from "react";

const initdata = [
  {
    id: 1,
    product_name: "Noodles",
    price: 30,
    qty: 1,
  },
  {
    id: 2,
    product_name: "Dosa",
    price: 40,
    qty: 2,
  },
  {
    id: 3,
    product_name: "Samosa",
    price: 70,
    qty: 3,
  },
];

function calculateTotal(products) {
  return products.reduce((acc, c) => acc + c.qty * c.price, 0);
}
function CartContainer() {
  const [data, setData] = useState(initdata);

  const handleChangeQty = (id, amount) => {
    let updateData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + amount,
        };
      } else {
        return item;
      }
    });
    setData(updateData);
  };
  return (
    <div>
      {data.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          label={item.product_name}
          qty={item.qty}
          price={item.price}
          handleChangeQty={handleChangeQty}
        />
      ))}

      <Total total={calculateTotal(data)} />
    </div>
  );
}
export default CartContainer;
