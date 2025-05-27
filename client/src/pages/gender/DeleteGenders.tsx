import AddGenderForms from "../../components/forms/AddGenderForm";
import MainLayout from "../layout/MainLayout";

const AddGender = () => {
  const content = (
    <>
      <div className="className d-flex justify-content-center">
        <div className="col-md-3">
          <AddGenderForms />
        </div>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default AddGender;
