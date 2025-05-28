import { useState } from "react"

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !quantity) return;

        //Create a new Item
        const newItem = {
            name,
            quantity : parseInt(quantity)
        }

        //Update the state with new Item
        setItems((prevItems)=>[...prevItems,newItem]);

        //clear input fields
        setName('');
        setQuantity('');
    }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            placeholder="Item name"
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type="number"
            value={quantity}
            placeholder="Quantity"
            onChange={(e)=>setQuantity(e.target.value)}
        />
        <button type='submit'>Add Item</button>
      </form>

      <ul>
        {items.map((item,index) => (
            <li key={index}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;
