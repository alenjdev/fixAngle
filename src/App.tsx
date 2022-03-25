import "./App.scss";
import { Fleet, Device, Authentication } from "@formant/data-sdk";
import { CommandIssuer } from "./components/CommandIssuer";
import { Component, ReactNode } from "react";

interface IAppState {
  device: Device | undefined;
}

export class App extends Component<{}, IAppState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      device: undefined,
    };
  }

  public componentDidMount = async () => {
    if (await Authentication.waitTilAuthenticated()) {
      this.setState({ device: await Fleet.getCurrentDevice() });
    }
  };

  render(): ReactNode {
    const { device } = this.state;
    return (
      <div className="App">
        <CommandIssuer
          device={device!}
          label="Fill-in polygon"
          command="fill_polygon"
        />
        <CommandIssuer
          device={device!}
          command="fix_angle"
          label="Fix striping angle"
        />
      </div>
    );
  }
}

export default App;
