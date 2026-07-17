import { useContext } from "react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

import "../styles/Wishlist.css";


export default function Wishlist() {


  const {
    wishlistItems,
    dispatch
  } = useContext(WishlistContext);

console.log(wishlistItems);
  const {
    dispatch: cartDispatch
  } = useContext(CartContext);



  return (

    <div className="wishlist">


      <h2>
        <FaHeart />
        My Wishlist
      </h2>


      {
        wishlistItems.length === 0 ?

          (

            <h3>
              Your wishlist is empty ❤️
            </h3>

          )

          :

          (

            <div className="wishlist-grid">


              {
                wishlistItems.map((item) => (


                  <div
                    className="wishlist-card"
                    key={item.id}
                  >


                    <img
                      src={item.thumbnail}
                      alt={item.title}
                    />


                    <h3>
                      {item.title}
                    </h3>


                    <p>
                      ₹ {item.price}
                    </p>


                    <div className="wishlist-buttons">


                      <button

                        className="cart"

                        onClick={() => {

                          cartDispatch({

                            type: "ADD_TO_CART",

                            payload: item

                          });


                          dispatch({

                            type: "REMOVE_FROM_WISHLIST",

                            payload: item.id

                          });

                        }}

                      >

                        <FaShoppingCart />

                        Move To Cart

                      </button>



                      <button

                        className="remove"

                        onClick={() =>

                          dispatch({

                            type: "REMOVE_FROM_WISHLIST",

                            payload: item.id

                          })

                        }

                      >

                        <FaTrash />

                        Remove

                      </button>


                    </div>


                  </div>


                ))
              }


            </div>

          )

      }


    </div>

  );

}