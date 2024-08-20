import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-10 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <p className="text-[#545454]">How to use</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-[#d03547]">YouTube</span> Downloader
        </h2>
        <div className="md:flex justify-center gap-16">
          <img src="/icon/person.png" alt="Person downloading video" className="md:h-96 h-60 m-auto mb-4" />
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center gap-6">
              <h3 className="text-lg border-2 border-[#d03547] text-[#d03547] md:h-20 flex justify-center items-center w-14 h-14 md:w-20 rounded-full md:text-2xl font-semibold mb-2">01</h3>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Find Video
                </h3>
                <p className="text-[#545454]">
                  Find the video you want to download on YouTube and copy its URL.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <h3 className="text-lg border-2 border-[#d03547] text-[#fff] shadow-sm shadow-[#d03547] bg-[#d03547] md:h-20 flex justify-center items-center w-14 h-14 md:w-20 rounded-full md:text-2xl font-semibold mb-2">02</h3>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Paste Video
                </h3>
                <p className="text-[#545454]">
                  Paste the copied link in the download bar and wait for the system to detect the video.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <h3 className="text-lg border-2 border-[#d03547] text-[#d03547] md:h-20 flex justify-center items-center w-14 h-14 md:w-20 rounded-full md:text-2xl font-semibold mb-2">03</h3>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Download Video
                </h3>
                <p className="text-[#545454]">
                  Click on download from the displayed list and save to your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
