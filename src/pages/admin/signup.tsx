import React from "react";
import BasicInfo from "../../components/admin/auth/BasicInfo";
import DocUpload from "../../components/admin/auth/DocUpload";

const signup = () => {
  const [page, setPage] = React.useState(0);
  const AuthForm = () => {
    switch (page) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <DocUpload />;
      default:
        return <BasicInfo />;
    }
  };
  return (
    <form className="flex flex-col items-center">
      {AuthForm()}
      {page === 0 && (
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Next
        </button>
      )}
      {page === 1 && (
        <button
          type="submit"
          // onClick={() => setPage(page + 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Sign Up
        </button>
      )}
    </form>
  );
};

export default signup;
