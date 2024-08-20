import Image from "next/image";

const Modal = ({ videoData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">{videoData.title}</h2>
        <Image
          src={videoData.picture}
          alt="Video Thumbnail"
          width={640}
          height={360}
          className="mb-4"
        />
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

export default Modal;
