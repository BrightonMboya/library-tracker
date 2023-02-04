import Input from "../../UI/Input";
import { ChangeEvent } from "react";

//@ts-ignore
const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col items-center md:mt-[2rem] md:gap-[1.5rem]">
      <div>
        <p className="text-xl font-medium text-blue">Basic Info</p>
      </div>

      <div className="md:flex md:gap-5">
        <Input
          type="text"
          label="Full Name"
          placeholder="Segun Favour Aletogibe"
          value={formData.fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
        />
      </div>

      <div className="md:flex md:gap-5">
        <Input
          type="email"
          label="Email"
          placeholder="Segun@yahoo.com"
          value={formData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              phoneNumber: e.target.value,
            });
          }}
        />
      </div>

      <div className="md:flex md:gap-5">
        <Input
          type="text"
          label="Country"
          placeholder="Nigeria"
          value={formData.country}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              state: e.target.value,
            });
          }}
        />
      </div>
      <Input
        type="text"
        label="Contact Adress"
        placeholder="Lagos, Nigeria"
        classes="md:w-[530px] md:h-[70px]"
        value={formData.adress}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
