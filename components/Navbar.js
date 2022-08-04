import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import {MdAccountCircle} from "react-icons/md"

const Navbar = ({ cart, addTocart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addTocart, removeFromCart, clearCart, subTotal);
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex md:flex-row flex-col p-3 items-center justify-start shadow-lg sticky top-0 bg-white z-10">
      <div className="logo">
        <Link href="/">
          <span className="text-3xl font-bold cursor-pointer">CodesWear</span>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex item-center cursor-pointer mx-8">
          <Link href="/tshirts">
            <li className="ml-4 font-sans font-medium">Tshirts</li>
          </Link>
          <Link href="/hoodies">
            <li className="ml-4 font-sans font-medium">Hoodies</li>
          </Link>
          <Link href="/stickers">
            <li className="ml-4 font-sans font-medium">Sticker</li>
          </Link>
          <Link href="/mugs">
            <li className="ml-4 font-sans font-medium">Mugs</li>
          </Link>
          <Link href="/order">
            <li className="ml-4 font-sans font-medium">Order</li>
          </Link>
        </ul>
      </div>
      <div  className="cart absolute right-5 top-4 flex ">
        <div onClick={toggleCart}>
        <AiOutlineShoppingCart className="text-3xl cursor-pointer mx-4" />
        </div>
        <Link href={"/login"}>
        <MdAccountCircle className="text-3xl cursor-pointer"/>
        </Link>
      </div>

      <div
        ref={ref}
        className={`sideCart  h-[100vh] w-80 absolute top-0 right-0 bg-slate-200 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"} `}
      >
        <h2 className="font-bold text-xl">Shopping cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-2xl cursor-pointer"
        >
          <AiFillCloseCircle />
        </span>
        <ol>
          {Object.keys(cart).length === 0 && (
            <div className="my-4 text-base font-base">No Item in the cart</div>
          )}
          {Object.keys(cart).map((item, index) => {
            return (
              <li key={item}>
                <div className="item flex my-3">
                  <div className="w-2/3 font-semibold">{cart[item].name}</div>
                  <div className="flex font-semibold text-1xl items-center justify-center w-1/3">
                    <AiOutlineMinusCircle
                      onClick={() =>
                        removeFromCart(
                          item,
                          1,
                          cart[item].price,
                          cart[item].name,
                          cart[item].size,
                          cart[item].variant
                        )
                      }
                      className="mx-3 text-5xl"
                    />{" "}
                    {cart[item].qty}
                    <AiOutlinePlusCircle
                      onClick={() =>
                        addTocart(
                          item,
                          1,
                          cart[item].price,
                          cart[item].name,
                          cart[item].size,
                          cart[item].variant
                        )
                      }
                      className="mx-3 text-5xl"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <Link href="/checkout">
          <button className="bg-orange-300 p-3">Checkout</button>
        </Link>
        <button onClick={clearCart} className="bg-red-600 p-3 ml-2">
          Clearcart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
