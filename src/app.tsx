import * as React from "react";
//import Button from "../dist/button/index";
import * as Index from "../index";
console.log(Index);
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Index.Button
                    type="primary"
                    onClick={() => {
                        alert(11);
                    }}
                >
                    测试
                </Index.Button>
                <Index.Name type="primary">232</Index.Name>
            </div>
        );
    }
}
