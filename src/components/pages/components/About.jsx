import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full md:w-1/2 px-4 self-start">
            <p className="mb-4">We are passionate about classic cars and everything that comes with them. From the intricate details to the roaring engines, we are dedicated to bringing the beauty and nostalgia of these timeless vehicles to life. Our team of experts has years of experience restoring and maintaining classic cars, ensuring that each vehicle that comes through our doors is treated with the utmost care and respect. We take pride in providing top-quality service to our clients and strive to make every experience with us unforgettable.</p>
            <p className="mb-4">Sed eget magna auctor, vestibulum nisi quis, viverra metus. Donec nec interdum justo. Aliquam erat volutpat. Suspendisse potenti. Sed at felis eu urna efficitur tincidunt.</p>
            <p className="mb-4">Phasellus ullamcorper sapien ut velit vulputate ultricies. Fusce euismod magna ac ex eleifend, ut bibendum libero blandit. Nulla facilisi.</p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd6f9347a-6ed4-11e6-acba-85f5c900fc1a.jpg?crop=3770%2C2121%2C29%2C431&resize=1500" alt="About Us" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;