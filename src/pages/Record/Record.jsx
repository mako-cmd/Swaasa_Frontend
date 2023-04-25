import { LoadingButton } from "@mui/lab";
import { useState, useEffect, useRef } from "react";
import "./Record.css";
let Record = () => {
  const [counter, setCounter] = useState(10);
  const [audioData, setAudioData] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef();
  const chunks = [];

  useEffect(() => {
    if (audioData.length > 0 && isRecording == false) {
      let blob = new Blob(audioData, { type: "audio/wav" });
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "audio_file.wav";
      downloadLink.click();
      window.location.href = "/result";
    }
  }, [audioData]);

  let startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();
        mediaRecorder.current.addEventListener("start", () => {
          setIsRecording(true);
        });

        mediaRecorder.current.addEventListener("dataavailable", (event) => {
          chunks.push(event.data);
          setAudioData(chunks);
        });
      })
      .catch((error) => {
        setIsRecording(false);
        console.error(error);
        throw new Error(error);
      });
  };
  let stopRecording = () => {
    if (
      mediaRecorder.current.state == "inactive" ||
      mediaRecorder.current == null
    ) {
      throw new Error("Audio recording failed");
    }
    mediaRecorder.current.stop();
  };

  useEffect(() => {
    let intervalId;
    if (isRecording && counter > 0) {
      intervalId = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      console.log(mediaRecorder);
    }
    if (counter == 0) {
      if (isRecording == true) {
        setIsRecording(false);
        stopRecording();
      }
    }
    return () => clearInterval(intervalId);
  }, [isRecording, counter]);

  const handleClick = (e) => {
    e.preventDefault();
    if (counter == 10) {
      startRecording();
    }
  };
  return (
    <div className="page">
      <div className=" record-bubble bubble">
        <h3>Touch The Mic To Record</h3>

        <LoadingButton
          loading={isRecording}
          onClick={handleClick}
          loadingIndicator={counter}
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
          }}
          variant="contained"
        >
          <span
            className="pi pi-microphone"
            style={{ fontSize: "50px" }}
          ></span>
        </LoadingButton>
      </div>
    </div>
  );
};

export default Record;
