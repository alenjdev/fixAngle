import { FC, useState } from "react";
import { Device } from "@formant/data-sdk";
import { Button } from "@alenjdev/ui-sdk";

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
  const [disbale, setDisable] = useState(false);
  const issueCommand = async () => {
    setDisable(true);
    if (!device) return;
    device.sendCommand(command, params !== undefined ? params : "");
    await timeout(5000);
    setDisable(false);
  };

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div>
      <Button
        disabled={disbale}
        onClick={issueCommand}
        type="primary"
        size="large"
      >
        {label}
      </Button>
    </div>
  );
};
