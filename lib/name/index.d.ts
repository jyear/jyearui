interface Button1Props {
    type?: buttonType;
    children?: any | void;
    title?: String | void;
    className?: string;
    onClick?: Function | void;
}

declare type button1Type = "primary" | "default";
