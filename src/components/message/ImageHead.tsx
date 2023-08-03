import React from "react";

const ImageHead = () => {
  return (
    <div className="flex justify-between items-center w-full abel">
      {/* File left */}
      <div className="flex justify-start items-center gap-4">
        <div className="bg-[#F0FFF4] flex justify-center items-center w-[3.5rem] h-[3.5rem] mx-auto z-10 rounded-lg">
          <div className="z-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#48BB78"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.67001 18.95L7.60001 15.64C8.39001 15.11 9.53001 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9M9.00001 10C9.53045 10 10.0392 9.78929 10.4142 9.41421C10.7893 9.03914 11 8.53043 11 8C11 7.46957 10.7893 6.96086 10.4142 6.58579C10.0392 6.21071 9.53045 6 9.00001 6C8.46958 6 7.96087 6.21071 7.5858 6.58579C7.21073 6.96086 7.00001 7.46957 7.00001 8C7.00001 8.53043 7.21073 9.03914 7.5858 9.41421C7.96087 9.78929 8.46958 10 9.00001 10Z"
                stroke="#48BB78"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start ">
          <h3 className="font-semibold text-md">Screenshot-3817.png</h3>
          <div
            className="flex justify-start items-center gap-4
              "
          >
            <h5 className="text-[#a3a3a3] font-semibold text-sm   ">PNG</h5>

            <h5 className="text-[#a3a3a3] font-semibold text-sm   ">3mb</h5>
          </div>
        </div>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          width="40px"
          height="40px"
          viewBox="-9 0 32 32"
          version="1.1"
        >
          <title>download</title>
          <path d="M13.48 17.6c-0.48 0-0.84 0.36-0.84 0.84v3.92c0 0.48-0.36 0.84-0.84 0.84h-9.28c-0.48 0-0.84-0.36-0.84-0.84v-3.92c0-0.44-0.36-0.84-0.84-0.84s-0.84 0.4-0.84 0.84v3.92c0 1.4 1.12 2.52 2.52 2.52h9.28c1.4 0 2.52-1.12 2.52-2.52v-3.92c0-0.44-0.36-0.84-0.84-0.84zM6.56 18.48c0.040 0.040 0.2 0.28 0.6 0.28s0.56-0.24 0.6-0.28l3.52-3.52c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-2.080 2.12v-7.92c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v7.92l-2.080-2.080c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l3.52 3.48z" />
        </svg>
      </button>
    </div>
  );
};

export default ImageHead;
