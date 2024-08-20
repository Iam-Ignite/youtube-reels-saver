import React from 'react';

const Features = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-100 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose VideoMax Downloader</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="w-full ">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">High Quality</h3>
            <p>Download all the videos in high quality and in various formats.</p>
          </div>
          <div className="w-full ">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Fast Downloading</h3>
            <p>Quickly download videos with no hidden fees.</p>
          </div>
          <div className="w-full ">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Unlimited Downloads</h3>
            <p>Download as many videos as you want.</p>
          </div>
          <div className="w-full ">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Support All Devices</h3>
            <p>Download videos on any device, including Windows, macOS, and Android.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
