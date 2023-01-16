import React from "react";

const DocUpload = () => {
  return (
    <React.Fragment>
      <div>
        <h3>Upload Passport photograph</h3>
        <div className="flex h-[150px] w-[300px] cursor-pointer  flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-500">
          <input
            type="file"
            accept="image/*"
            className="absolute h-[100px] border-2 opacity-0"
          />
          <p className="">Upload Your Passport</p>
        </div>
      </div>

      <div className="mt-[2rem]">
        <h3>Upload Identity Card</h3>
        <div className="flex h-[150px] w-[300px] cursor-pointer  flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-500">
          <input
            type="file"
            accept="image/*"
            className="absolute h-[100px] border-2 opacity-0"
          />
          <p className="">Upload Your Identity Card</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DocUpload;
