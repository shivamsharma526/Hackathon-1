import { useContext } from 'react';
import { UserContext } from '../assets/API/ContextApi';

const CartPanel = () => {
  const { cartOpen, setCartOpen, cart } = useContext(UserContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        cartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={() => setCartOpen(false)}>✖</button>
      </div>
      
      <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="border p-2 mb-2 rounded flex gap-1">
                <img src={item.image} alt="" className='w-10 h-10  rounded' />
                <div>

              <h3 className="font-medium">{item.title}</h3>
              <p className='leading-2'>Price: ₹{item.price}</p>
                </div>
              
            </div>
            
          ))
        )}
        <div className="p-4 border-t font-bold text-lg">
        Total: ₹{totalPrice}
      </div>
      </div>
    </div>
  );
};

export default CartPanel;
