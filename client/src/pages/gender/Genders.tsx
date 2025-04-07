import AddGenderForms from "../../components/forms/AddGenderForms";
import GendersTable from "../../components/tables/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const content = (
    <>
      <div className="row">
        <div className="col-md-4">
          <AddGenderForms />
        </div>
        <div className="col-md-8">
          <GendersTable />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default Genders;
