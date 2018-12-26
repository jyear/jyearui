import * as React from "react";
//import Button from "../dist/button/index";
import { Button, Input } from "../index";
export default class App extends React.Component {
    readonly state = {
        value: 1
    };
    InputChange(e: any) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        let { value } = this.state;
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        alert(11);
                    }}
                    style={{ marginRight: "10px" }}
                >
                    测试
                </Button>
                <Input value={value} onChange={this.InputChange.bind(this)} />
            </div>
        );
    }
}
