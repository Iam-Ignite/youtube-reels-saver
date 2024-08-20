import React, { useState } from "react";
import axios from "axios";
import hero from "../hero.jpg";
import Header from "./Header";

const Modal = ({ videoData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>×</button>
        <h2 className="text-2xl font-semibold mb-4">{videoData.title}</h2>
        <img src={videoData.picture} alt="Video Thumbnail" className="mb-4" />
        <p className="mb-4">Choose a quality to download:</p>
        <ul className="mb-4">
        {videoData?.links.map((format, index) => (
            <li key={index} className="mb-2">
              <a
                href={format.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {format.quality}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Banner = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      setError("Failed to paste from clipboard. Please try again.");
    }
  };

  const handleDownloadClick = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "GET",
        url: "https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo",
        params: {
          url, // This is the URL entered by the user
        },
        headers: {
          "x-rapidapi-key":
            "7cc361e202msh2b055fbf6365b7ep10456fjsn73d878075aa9",
          "x-rapidapi-host":
            "youtube-video-and-shorts-downloader1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setVideoData(response.data); // Assuming the API returns video data
      setShowModal(true);
    } catch (err) {
      setError("Failed to fetch video data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoData(null);
  };

  return (
    <section
      className="relative hero bg-cover bg-center h-screen rounded-br-[15rem]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Header />
      <div className="container mx-auto relative z-50 px-4 md:px-0 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Online Video Downloader
          </h1>
          <p className="text-base md:text-lg text-gray-900 font-semibold mb-8">
            Do Not Look Below! Explore Our{" "}
            <span className="text-red-500 font-semibold">VideoMax</span> Video
            Downloader, A Free Solution To Quickly Download Videos Or Music With
            Just One Click!
          </p>
          <div className="relative flex bg-[#e9e9e9] gap-2 max-w-full items-center md:max-w-lg mx-auto py-5 border-[.5rem] border-white px-4 rounded-full text-gray-800 shadow-md">
          <img
              src="/icon/paste.svg"
              alt="Paste"
              width={20}
              height={20}
              onClick={handlePasteClick}
              className="cursor-pointer"
            />
            <input
              type="text"
              placeholder="Insert YouTube Video Link Here ..."
              className="w-full text-sm outline-none bg-transparent"
              value={url}
              onChange={handleInputChange}
            />
            <button
              className="absolute right-3 text-xs bg-[#d03547] text-white py-2 px-6 rounded-full"
              onClick={handleDownloadClick}
              disabled={loading}
            >
              {loading ? "Loading..." : "Download"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {showModal && videoData && (
            <Modal videoData={videoData} onClose={closeModal} />
          )}
          <div className="w-4/5 items-center m-auto p-2 px-4 rounded-b-2xl md:flex justify-between bg-[#303030]">
            <p className="text-white text-sm mb-2">Supported Platforms :</p>
            <div className="flex justify-center space-x-4">
              <img src="/icon/windows.svg" alt="Windows" className="h-5" />
              <img src="/icon/apple.svg" alt="Apple" className="h-5" />
              <img src="/icon/android.svg" alt="Android" className="h-5" />
              <img src="/icon/linux.svg" alt="Linux" className="h-5" />
              <img src="/icon/chrome.svg" alt="Chrome" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
