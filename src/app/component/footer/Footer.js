import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark-green text-white">
      <section className="contact flex flex-col justify-center items-center py-5">
        <h3 className="font-semibold">Contact Us</h3>
        <p className="flex justify-center text-white text-m">
          <span>E-mail</span>
          <span>:</span> <span>desipride24@gmail.com</span>
        </p>
        <p className="text-white text-m">
          <span>Contact number</span>
          <span>:</span>
          <span>6302329690</span>
        </p>
      </section>
      <section className="faq">
        <h2 className="text-center">FAQ</h2>
        <ul className="text-m text-white text-center">
            <li>Product-Related Questions</li>
            <li>Ordering and Payment</li>
            <li>Shipping and Delivery</li>
            <li>Returns and Refunds</li>
            <li>Customer Support</li>
        </ul>
      </section>
    </div>
  );
};
