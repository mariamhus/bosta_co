import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { statusHandler } from "./StatusHandler";

function Main(props: { status: string }) {
  const current_state = statusHandler(props?.status);
  return (
    <ProgressBar
      percent={current_state?.progress}
      filledBackground={current_state?.color}
    >
      <Step transition="scale">
        {({ accomplished }: any) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }: any) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }: any) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
          />
        )}
      </Step>
      <Step>
        {({ accomplished}: any) => (
          <div
            className={`w-8 indexedStep ${
              accomplished ? "accomplished" : null
            }`}
          >
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              className="w-full"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />{" "}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default Main;
