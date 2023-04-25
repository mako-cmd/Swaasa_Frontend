import { InputMask } from "primereact/inputmask";
import { LoadingButton } from "@mui/lab";
import { useOutletContext } from "react-router-dom";

import "../../Start.css";

let EnterOTP = () => {
  const context = useOutletContext();
  context.setPrevPage("/start/step-1");
  context.setNextPage("#");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    context.setOtp(formData.get("otp"));
    window.location.href = "/start/step-3";
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <h4>
        <p>A 6 digit code has been sent to your mobile. </p>
        <p>Enter this value below:</p>
      </h4>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-phone"></i>
        </span>
        <InputMask
          required
          value={0}
          name="otp"
          onChange={(e) => setValue(e.target.value)}
          mask="999-999"
          placeholder="Code"
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

export default EnterOTP;
