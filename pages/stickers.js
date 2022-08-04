import Link from "next/link";
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";

const Stickers = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 h-[70vh] mx-auto">
          <div className="flex flex-wrap -m-4">
          {products.map((item, index) => {
              return (
                <Link passHref={true} href={`/product/${item.slug}`}>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer">
                    <a className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="h-[30vh] md:h-[16vh] block m-auto "
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.desc}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Stickers" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Stickers;
