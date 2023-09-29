import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { statusHandler } from "./StatusHandler";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArchiveIcon from "@mui/icons-material/Archive";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import { useAppSelector } from "../../stores/hooks";
import { translate } from "../../i18next";

const ColorlibConnector = styled(StepConnector)(({ theme, color }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(0, 128, 0) 0%, rgb(42, 170, 138) 50%, rgb(53, 94, 59) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: color,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState,color }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor:color,
    boxShadow: "0 4px 10px 0 rgb(53, 94, 59)",
  }),
  ...(ownerState.completed && {
    backgroundColor:color,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, color } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <WidgetsIcon />,
    2: <ArchiveIcon />,
    3: <LocalShippingIcon />,
    4: <LibraryAddCheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      color={color}

    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["orderCreated", "orderReceived", "orderDelivery", "orderHanded"];

export default function (props: { status: string }) {
  const { language } = useAppSelector((state) => state.lang);
  let current_state = statusHandler(props?.status);
  return (
    <Stack sx={{ width: "100%" , direction:"ltr"}} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={current_state.activeStep}
        connector={<ColorlibConnector color={current_state.color} />}
      >
        {steps.map((label) => (
          <Step key={label}> 
              <StepLabel  StepIconProps={current_state} StepIconComponent={ColorlibStepIcon}>
                {translate(label, language)}
              </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
