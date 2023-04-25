import { LoadingButton } from "@mui/lab";
import { useOutletContext } from "react-router-dom";

let PrerecordInstructions = () => {
  const context = useOutletContext();
  context.setPrevPage("/start/step-2");
  context.setNextPage("#");

  const handleClick = () => {
    window.location.href = "/record";
  };
  return (
    <>
      <i>
        <h2 style={{ marginBottom: 0 }}>Important Information</h2>
      </i>
      <span>
        <h5>For reliable results ensure the following:</h5>
      </span>
      <ul
        style={{ fontWeight: 400, placeSelf: "baseline", paddingRight: "10px" }}
      >
        <li>Find a quiet place</li>
        <li>
          Ensure while recording there is no background noise like wind noise,
          fan and other such noises.
        </li>
        <li>Hold the phone 4-8 inches from your mouth.</li>
        <li>Cough multiple times</li>
        <li>
          A recording of 10 seconds will have an adequate number of cough
          sequences:
          <ul>
            <li>Please cough multiple times.</li>
            <li>Each time take a breath and cough.</li>
            <li>Each time take a breath and cough.</li>
          </ul>
        </li>
        <li>
          After recording, wipe the phone with a soft cloth dipped
          in disinfectant.
        </li>
      </ul>
      <LoadingButton onClick={handleClick} sx={{ color: "blue" }}>
        Proceed
      </LoadingButton>
    </>
  );
};
export default PrerecordInstructions;
