import Input from "../../UI/Input";
import Header from "./Header";
//@ts-ignore

export default function StaffInfo({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5">
      <Header
        title="Staff Info"
        desc="Fill the form below based on the staff and user strength data gotten from the library."
      />
      <Input
        label="Number Of Proffesional Staff"
        placeholder="45"
        type="text"
        value={formData.numberOfProffesionalStaff}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            numberOfProffesionalStaff: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of Unproffesional Staff"
        placeholder="5"
        type="text"
        value={formData.numberOfUnproffessionalStaff}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            numberOfUnproffessionalStaff: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of Unproffesional Staff"
        placeholder="5"
        type="text"
        value={formData.numberOfUsers}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            numberOfUsers: e.target.value,
          });
        }}
      />
    </section>
  );
}