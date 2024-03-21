import React from 'react';
import img from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="p-8 text-slate-500">
      <section className="mb-6 lg:flex lg:justify-between">
        <div className="text-center flex flex-col items-center lg:text-left lg:items-start">
          <a href="#" className="block mb-4">
            <img className="block h-8" src={img} alt="Workflow" />
          </a>
          <p className="mb-4">Making the world a better place through <br /> constructing elegant hierarchies.</p>
          <span className="space-x-6">
            <a href="#" className=""><i className="fab fa-facebook"></i></a>
            <a href="#" className=""><i className="fab fa-instagram"></i></a>
            <a href="#" className=""><i className="fab fa-twitter"></i></a>
          </span>
        </div>
        <ul className="hidden md:flex md:justify-around lg:flex-auto">
          <li>
            <h5 className="text-slate-400 mb-3">SOLUTIONS</h5>
            <ul className="space-y-3">
              <li><a href="#" className="">Marketing</a></li>
              <li><a href="#" className="">Analytics</a></li>
              <li><a href="#" className="">Commerce</a></li>
              <li><a href="#" className="">Insights</a></li>
            </ul>
          </li>
          {/* Other list items go here */}
        </ul>
        <ul className="hidden md:flex md:justify-around lg:flex-auto">
          <li>
            <h5 className="text-slate-400 mb-3">SOLUTIONS</h5>
            <ul className="space-y-3">
              <li><a href="#" className="">Marketing</a></li>
              <li><a href="#" className="">Analytics</a></li>
              <li><a href="#" className="">Commerce</a></li>
              <li><a href="#" className="">Insights</a></li>
            </ul>
          </li>
          {/* Other list items go here */}
        </ul>
        <ul className="hidden md:flex md:justify-around lg:flex-auto">
          <li>
            <h5 className="text-slate-400 mb-3">SOLUTIONS</h5>
            <ul className="space-y-3">
              <li><a href="#" className="">Terms and Conditions</a></li>
              <li><a href="#" className="">Privacy Policy</a></li>
              <li><a href="#" className="">FAQ</a></li>
              <li><a href="#" className="">Insights</a></li>
            </ul>
          </li>
          {/* Other list items go here */}
        </ul>
        <ul className="hidden md:flex md:justify-around lg:flex-auto">
          <li>
            <h5 className="text-slate-400 mb-3">SOLUTIONS</h5>
            <ul className="space-y-3">
              <li><a href="#" className="">Linked in</a></li>
              <li><a href="#" className="">Instagram</a></li>
              <li><a href="#" className="">Github</a></li>
              <li><a href="#" className="">Whatsapp</a></li>
            </ul>
          </li>
          {/* Other list items go here */}
        </ul>
        
      </section>
      <hr />
      <h6 className="text-center"> © 2022 Workflow, Inc. All rights reserved.</h6>
    </footer>
  );
}

export default Footer;