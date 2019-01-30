import * as React from "react";
import { Button, Input, Switch } from "../index";
export default class App extends React.Component {
    readonly state = {
        value: 1,
        isOpen: true
    };
    InputChange(e: any) {
        this.setState({
            value: e.target.value
        });
    }
    changeSwitch(e: any) {
        this.setState({
            isOpen: e.value
        });
    }
    render() {
        let { value, isOpen } = this.state;
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        alert(11);
                    }}
                    style={{ marginRight: "10px" }}
                >
                    测试232323
                </Button>
                <Input value={value} onChange={this.InputChange.bind(this)} />
                {/* <div>sdsds</div> */}
                <Switch
                    value={isOpen}
                    onChange={this.changeSwitch.bind(this)}
                    disabled={false}
                />
            </div>
        );
    }
}
