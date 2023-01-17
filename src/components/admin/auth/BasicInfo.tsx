import React from "react";
import Input from "../../UI/Input";

//@ts-ignore
const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="text-xl font-medium text-blue">Basic Info</p>
      </div>
      <Input
        type="text"
        label="Full Name"
        placeholder="Segun Favour Aletogibe"
        value={formData.fullName}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            fullName: e.target.value,
          });
        }}
      />
      <Input
        type="password"
        label="Password"
        placeholder="*******"
        value={formData.password}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            password: e.target.value,
          });
        }}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Segun@yahoo.com"
        value={formData.email}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            email: e.target.value,
          });
        }}
      />
      <Input
        label="Phone Number"
        placeholder="+234784319877"
        type="phonenumber"
        value={formData.phoneNumber}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            phoneNumber: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        label="Country"
        placeholder="Nigeria"
        value={formData.country}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            country: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        label="State"
        placeholder="Abuja"
        value={formData.state}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            state: e.target.value,
          });
        }}
      />
      <Input
        type="text"
        label="Contact Adress"
        placeholder="Lagos, Nigeria"
        value={formData.adress}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            adress: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default BasicInfo;
