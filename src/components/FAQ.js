import React from 'react';

const FAQ = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">What is X YouTube Downloader?</h3>
            <p className="text-gray-400">X YouTube Downloader is a free online tool that allows you to download YouTube videos.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Is X YouTube Downloader free?</h3>
            <p className="text-gray-400">Yes, it is completely free.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Where are the downloaded videos stored?</h3>
            <p className="text-gray-400">They are stored in your download folder or browser's download history.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Can we download unlimited videos?</h3>
            <p className="text-gray-400">Yes, there is no limit on the number of videos you can download.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
