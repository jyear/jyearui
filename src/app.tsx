import * as React from "react";
//import Button from "../dist/button/index";
import { Button, Name } from "../index";
export default class App extends React.Component {
    render() {
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
                <Name>232</Name>
            </div>
        );
    }
}
