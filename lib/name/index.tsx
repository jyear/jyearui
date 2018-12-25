import * as React from "react";
import classnames from "classnames";
import "./index.less";

class ButtonName extends React.Component<Button1Props> {
    constructor(props: Button1Props) {
        super(props);
    }
    static readonly defaultProps: Button1Props = {
        type: "default",
        children: null,
        title: null,
        className: "",
        onClick: null
    };
    public onClick() {
        let { onClick } = this.props;
        if (onClick && typeof onClick === "function") {
            onClick();
        }
    }
    render() {
        let { children, title, type, className } = this.props;
        return (
            <div
                onClick={this.onClick.bind(this)}
                className={classnames("jyear-button", type, className)}
            >
                {children ? children : title}
            </div>
        );
    }
}
export default ButtonName;
