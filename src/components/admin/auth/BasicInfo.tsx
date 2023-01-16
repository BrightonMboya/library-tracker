import React from "react";
import Input from "../../UI/Input";

const BasicInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="text-xl font-medium text-blue">Basic Info</p>
      </div>
      <Input
        type="text"
        label="Full Name"
        placeholder="Segun Favour Aletogibe"
        value=""
        onChange={() => {}}
      />
      <Input
        type="text"
        label="Password"
        placeholder="*******"
        value=""
        onChange={() => {}}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Segun@yahoo.com"
        value=""
        onChange={() => {}}
      />
      <Input
        label="Phone Number"
        placeholder="+234784319877"
        type="phonenumber"
        value=""
        onChange={() => {}}
      />
      <Input
        type="text"
        label="Country"
        placeholder="Nigeria"
        value=""
        onChange={() => {}}
      />
      <Input
        type="text"
        label="State"
        placeholder="Abuja"
        value=""
        onChange={() => {}}
      />
      <Input
        type="text"
        label="Contact Adress"
        placeholder="Lagos, Nigeria"
        value=""
        onChange={() => {}}
      />
    </div>
  );
};

export default BasicInfo;
