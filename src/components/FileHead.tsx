import React from "react";

const FileHead = () => {
  return (
    <div className="flex justify-between items-center w-full abel">
      {/* File left */}
      <div className="flex justify-start items-center gap-4">
        <div className="bg-[#FFF5F5] flex justify-center items-center w-[3.5rem] h-[3.5rem] mx-auto z-10 rounded-lg">
          <div className="z-100">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12.2H15M8 16.2H12.38M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                stroke="#F56565"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 4.02C19.33 4.2 21 5.43 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44 4.67 4.2 8 4.02"
                stroke="#F56565"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start ">
          <h3 className="font-semibold text-md">i9.pdf</h3>
          <div
            className="flex justify-start items-center gap-4
              "
          >
            <h5 className="text-[#a3a3a3] font-semibold text-sm   ">PDF</h5>

            <h5 className="text-[#a3a3a3] font-semibold text-sm   ">9mb</h5>
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

export default FileHead;
