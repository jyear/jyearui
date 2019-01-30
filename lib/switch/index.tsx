import * as React from "react";
import classnames from "classnames";
import "./index.less";

export default class Switch extends React.PureComponent<
    SwitchProps,
    SwitchState
> {
    constructor(props: SwitchProps) {
        super(props);
    }
    static readonly defaultProps: SwitchProps = {
        disabled: false
    };
    readonly state: SwitchState = {
        isOpen: false
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): any {
        if (nextProps && nextProps.value != undefined) {
            return {
                isOpen: nextProps.value
            };
        }
        return null;
    }
    public onChange() {
        let { value, onChange, disabled } = this.props;
        if (disabled) {
            return;
        }
        if (value == undefined) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        } else {
            if (onChange && typeof onChange === "function") {
                onChange({ value: !this.state.isOpen });
            }
        }
    }
    public render() {
        let { isOpen } = this.state;
        let { className, style, disabled } = this.props;
        return (
            <div
                className={classnames(
                    "jyear-switch",
                    isOpen ? "open" : "",
                    disabled ? "disabled" : "",
                    className
                )}
                style={style}
                onClick={this.onChange.bind(this)}
            >
                <span className="jyear-btn" />
            </div>
        );
    }
}
