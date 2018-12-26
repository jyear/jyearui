interface ButtonProps {
    type?: buttonType;
    children?: any | void;
    title?: String | void;
    className?: string;
    onClick?: Function | void;
    style?: any;
}
declare type buttonType = "primary" | "default";
