import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { statusHandler } from "./StatusHandler";
import { translate } from "../../i18next";
import { useAppSelector } from "../../stores/hooks";

function Main(props: { status: string }) {
  const { language } = useAppSelector((state) => state.lang);
  const current_state = statusHandler(props?.status);
  return (
    <div className="text-center px-5">

    <ProgressBar
      percent={current_state?.progress}
      filledBackground={current_state?.color}
    >
      <Step transition="scale">
        {({ accomplished,index }: any) => (
          <div
          className={`w-8 translate-y-3 indexedStep ${
            accomplished ? "accomplished" : null
          }`}
        >
          <div
      className={`indexedStep ${accomplished ? "accomplished" : null}`}
    >
      {index + 1}
    </div>{" "}
          <p className="whitespace-nowrap -translate-x-5">{translate("orderCreated",language)}</p>
        </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished,index }: any) => (
          <div
          className={`w-8 translate-y-3 indexedStep ${
            accomplished ? "accomplished" : null
          }`}
        >
          <div
      className={`indexedStep ${accomplished ? "accomplished" : null}`}
    >
      {index + 1}
    </div>{" "}
          <p className="whitespace-nowrap -translate-x-5">{translate("orderReceived",language)}</p>
        </div>
            )}
      </Step>
      <Step transition="scale">
        {({ accomplished,index }: any) => (
          <div
          className={`w-8 translate-y-3 indexedStep ${
            accomplished ? "accomplished" : null
          }`}
        >
          <div
      className={`indexedStep ${accomplished ? "accomplished" : null}`}
    >
      {index + 1}
    </div>{" "}
          <p className="whitespace-nowrap -translate-x-5">{translate("orderDelivery",language)}</p>
        </div>
        
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`w-8 translate-y-3 indexedStep ${
              accomplished ? "accomplished" : null
            }`}
          >
            <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>{" "}
            <p className="whitespace-nowrap -translate-x-5">{translate("orderHanded",language)}</p>
          </div>
        )}
      </Step>
    </ProgressBar>
            </div>
  );
}

export default Main;
