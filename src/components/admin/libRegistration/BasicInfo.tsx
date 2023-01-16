import Input from "../../UI/Input";
import Header from "./Header";

//@ts-ignore
export default function BascicInfo({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5">
      <Header
        title="Basic Info"
        desc=" Fill the form below based on the Basic data gotten from the library."
      />
      <Input
        label="Name of Library"
        placeholder="National Library of Abuja"
        type="text"
        value={formData.name}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            name: e.target.value,
          });
        }}
      />
      <Input
        label="Library Type"
        placeholder="Federal Library"
        type="text"
        value={formData.type}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            type: e.target.value,
          });
        }}
      />
      <Input
        label="Year of Establishment"
        placeholder="1985"
        type="text"
        value={formData.yearOfEstablishment}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            yearOfEstablishment: e.target.value,
          });
        }}
      />
      <Input
        label="Library Email Adress"
        placeholder="nationlibrary@yahoo.com"
        type="email"
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
        label="Library Website"
        placeholder="abujaLibrary.com"
        type="text"
        value={formData.website}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            website: e.target.value,
          });
        }}
      />
      <Input
        label="Latitude"
        placeholder="7.878134"
        type="text"
        value={formData.latitude}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            latitude: e.target.value,
          });
        }}
      />
      <Input
        label="Longitude"
        placeholder="-8.13902"
        type="text"
        value={formData.longitude}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            longitude: e.target.value,
          });
        }}
      />
      <Input
        label="country"
        placeholder="Nigeria"
        type="text"
        value={formData.country}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            country: e.target.value,
          });
        }}
      />
      <Input
        label="State"
        placeholder="Lagos"
        type="text"
        value={formData.state}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            state: e.target.value,
          });
        }}
      />
      <Input
        label="Library Adress"
        placeholder="Enter the Adress"
        type="text"
        value={formData.adress}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            adress: e.target.value,
          });
        }}
      />
      <Input
        label="Tell us about the library"
        placeholder="Type Here"
        type="text"
        value={formData.extract}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            extract: e.target.value,
          });
        }}
      />
      <Input
        label="Opening Time"
        placeholder="08:00 hrs"
        type="text"
        value={formData.openingTime}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            openingTime: e.target.value,
          });
        }}
      />
      <Input
        label="Closing Time"
        placeholder="20:00 Hrs"
        type="text"
        value={formData.closingTime}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            closingTime: e.target.value,
          });
        }}
      />
    </section>
  );
}
