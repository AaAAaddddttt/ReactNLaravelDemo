function EditGenderForms() {
  return (
    <>
      <div className="className form-group">
        <div className="className mb-3">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            SAVE Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default EditGenderForms;
