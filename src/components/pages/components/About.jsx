import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, velit eu finibus semper, lorem neque tristique massa, in venenatis velit nisl non enim. Aenean scelerisque risus vel enim pharetra dapibus. Curabitur in purus sed lorem facilisis lacinia.</p>
            <p className="mb-4">Sed eget magna auctor, vestibulum nisi quis, viverra metus. Donec nec interdum justo. Aliquam erat volutpat. Suspendisse potenti. Sed at felis eu urna efficitur tincidunt.</p>
            <p className="mb-4">Phasellus ullamcorper sapien ut velit vulputate ultricies. Fusce euismod magna ac ex eleifend, ut bibendum libero blandit. Nulla facilisi.</p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img src="https://via.placeholder.com/800x600" alt="About Us" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;