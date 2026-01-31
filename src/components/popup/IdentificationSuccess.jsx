import Image from "next/image";
import React from "react";

const IdentificationSuccessModal = ({isOpen, onClose, data, message}) => {
  if (!isOpen) return null;

  const normalizeText = (value) => {
    if (typeof value === "string" || typeof value === "number") return value;
    if (value && typeof value === "object") {
      return (
        value.name ||
        value.title ||
        value.label ||
        value.plant_name ||
        value.disease ||
        ""
      );
    }
    return "";
  };

  const normalizeImage = (value) => {
    if (typeof value === "string") return value;
    if (value && typeof value === "object") return value.image || "";
    return "";
  };

  const plantName = normalizeText(data?.plant_name);
  const explanation = normalizeText(data?.explaination);
  const imageSrc = normalizeImage(data?.image);
  const similarImageSrc = normalizeImage(data?.similar_images);

  return (
    <div
      className='fixed p-2 h-auto overflow-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white p-6 rounded-lg max-w-lg mx-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-center text-xl font-semibold text-green-600'>
          {message && message == "Plant disease record created successfully"
            ? "Identifikasi Informasi Tanaman berhasil!"
            : "Identifikasi Informasi Tanaman Gagal!"}
        </h3>

        {data && (
          <div className='mt-4'>
            <h4 className='text-lg font-bold text-gray-800'>Nama Tanaman:</h4>
            <p className='text-sm text-gray-600'>{plantName}</p>

            <h4 className='text-lg font-bold text-gray-800 mt-4'>
              Probabilitas:
            </h4>
            <p className='text-sm text-gray-600'>
              {(data.probability * 100).toFixed(2)}%
            </p>

            <div className='flex flex-col md:flex-row gap-0 md:gap-4'>
              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Tanaman:
                </h4>
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={plantName}
                    width={400}
                    height={400}
                    className='w-full h-[100px] md:h-[200px] object-cover rounded-lg mt-2'
                  />
                )}
              </div>

              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Serupa:
                </h4>
                {similarImageSrc && (
                  <Image
                    src={similarImageSrc}
                    alt='Gambar Serupa'
                    width={400}
                    height={400}
                    className='w-full h-[100px] md:h-[200px] object-cover rounded-lg mt-2'
                  />
                )}
              </div>
            </div>
            <div className='grid'>
              <h4 className='text-lg font-bold text-gray-800 mt-4'>
                Penjelasan:
              </h4>
              <p className='text-sm text-gray-600'>{explanation}</p>
            </div>
          </div>
        )}

        <button
          className='mt-4 px-4 py-2 bg-green-600 text-white rounded-full w-full'
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default IdentificationSuccessModal;
