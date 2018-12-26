import * as React from "react";
import classnames from "classnames";
import "./index.less";

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
    }
    static readonly defaultProps: InputProps = {
        type: "text",
        onChange: null
    };
    public changeEvent(e: any) {
        let { onChange } = this.props;
        if (onChange && typeof onChange == "function") {
            onChange({ ...e, value: e.target.value });
        }
    }
    render() {
        let { type, value, className, style } = this.props;
        return (
            <div className={classnames("jyear-input", className)} style={style}>
                <input
                    ref="input"
                    className="jyear-input-inner"
                    type={type}
                    value={value.toString()}
                    onChange={this.changeEvent.bind(this)}
                />
            </div>
        );
    }
}
export default Input;
