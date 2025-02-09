import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? <p>No items in wishlist.</p> : 
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default Wishlist;

  