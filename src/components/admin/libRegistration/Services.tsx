import Input from "../../UI/Input";
import Header from "./Header";

//@ts-ignore
export default function Services({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5">
      <Header
        title="Events"
        desc="Record event based on the yearly calender of the Library "
      />
      <Input
        label="Do they Have Internet Facilities?"
        placeholder="Yes"
        type="Text"
        value={formData.internetFacilities}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            internetFacilities: e.target.value,
          });
        }}
      />
      <Input
        label="Print and Copy Access?"
        placeholder="Yes"
        type="text"
        value={formData.printAndCopyAccess}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            printAndCopyAccess: e.target.value,
          });
        }}
      />
      <Input
        label="Can Disable person use library?"
        placeholder="Yes"
        type="text"
        value={formData.disablePersonUseLibrary}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            disablePersonUseLibrary: e.target.value,
          });
        }}
      />

      <Input
        label="SRHR Information Services"
        placeholder="Yes"
        type="text"
        value={formData.SRHRInfoServices}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            SRHRInfoServices: e.target.value,
          });
        }}
      />

      <Input
        label="Registration Cost per Month"
        placeholder="N200,000"
        type="text"
        value={formData.registrationCostPerMonth}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            registrationCostPerMonth: e.target.value,
          });
        }}
      />
      <Input
        label="Registration Cost per Year"
        placeholder="Yes"
        type="text"
        value={formData.registrationCostPerYear}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            registrationCostPerYear: e.target.value,
          });
        }}
      />
    </section>
  );
}