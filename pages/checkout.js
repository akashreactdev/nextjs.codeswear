import Link from "next/link";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Checkout = ({cart,addTocart,removeFromCart,clearCart,subTotal}) => {
  return (
    <div className="container m-auto ">
      <h1 className="font-bold text-3xl text-center my-8">Checkout</h1>
      <h2 className="text-xl font-semibold">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
        <div className="px-2 w-full">
          <div class=" mb-4">
            <label for="address" class="leading-7 text-sm text-gray-600">
              Address
            </label>
            <textarea cols="30" rows="3"  id="address"
              name="address"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="phoneno" class="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneno"
              name="phoneno"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">
                City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="pincode" class="leading-7 text-sm text-gray-600">
                Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>


      <h2 className="font-semibold text-xs mb-5">2. Reviews Cart Items & Pay</h2>

      <div
        className="sideCart bg-slate-200 px-8 py-2 mb-3"
      >
        <h4 className="font-bold text-xl">Cart Item</h4>
       
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
                      className="mx-3 text-1xl"
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
                      className="mx-3 text-1xl"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <span className="font-bold ">SubTotal:{subTotal}</span>
        </ol> 
      </div>
        <div>
          <Link href="/checkout">
          <button className="bg-orange-300  px-10 py-2 mt-3 rounded mb-3">Pay: {subTotal}</button>
        </Link>
        </div>

    </div>
  );
};

export default Checkout;
