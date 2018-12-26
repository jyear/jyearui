import * as React from "react";
import classnames from "classnames";
import "./index.less";

class Button extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }
    static readonly defaultProps: ButtonProps = {
        type: "default",
        children: null,
        title: null,
        className: "",
        onClick: null,
        style: null
    };
    public onClick() {
        let { onClick } = this.props;
        if (onClick && typeof onClick === "function") {
            onClick();
        }
    }
    render() {
        let { children, title, type, className, style } = this.props;
        return (
            <div
                onClick={this.onClick.bind(this)}
                className={classnames("jyear-button", type, className)}
                style={style}
            >
                {children ? children : title}
            </div>
        );
    }
}
export default Button;
