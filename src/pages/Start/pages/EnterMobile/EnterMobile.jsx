import { InputMask } from "primereact/inputmask";
import { LoadingButton } from "@mui/lab";
import { useOutletContext } from "react-router-dom";
import "../../Start.css";
import { useEffect } from "react";

let EnterMobile = () => {
  const context = useOutletContext();
  context.setPrevPage("/");
  context.setNextPage("#");

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    context.setMobile(formData.get("mobile"));
    window.location.href = "/start/step-2";
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <h4>Please provide your mobile number</h4>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-phone"></i>
        </span>
        <InputMask
          required
          name="mobile_number"
          value={0}
          onChange={(e) => setValue(e.target.value)}
          mask="9999 999 999"
          placeholder="0400 000 000"
        />
      </div>
      <div className="p-inputgroup">
        <LoadingButton type="submit" sx={{ width: "100%" }} variant="outlined">
          <span>Next</span>
        </LoadingButton>
      </div>
    </form>
  );
};

export default EnterMobile;
