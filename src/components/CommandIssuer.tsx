import { FC } from "react";
import { Device } from "@formant/data-sdk";
import { Button } from "../common/Button";

interface ICommandIssuerProps {
  device: Device;
  command: string;
  params?: string;
  label: string;
}

export const CommandIssuer: FC<ICommandIssuerProps> = ({
  device,
  command,
  params,
  label,
}) => {
  const issueCommand = async () => {
    if (!device) return;
    device.sendCommand(command, params !== undefined ? params : "");
  };

  return (
    <div>
      <Button onClick={issueCommand} type="primary" size="large">
        {label}
      </Button>
    </div>
  );
};
