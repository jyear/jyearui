interface ButtonProps {
    type?: buttonType;
    children?: any | void;
    title?: String | void;
    className?: string;
    onClick?: Function | void;
}

declare type buttonType = "primary" | "default";
