interface InputProps {
    className?: string;
    style?: any;
    type?: string;
    value?: string | number;
    onChange?: Function | void;
}
interface InputState {
    value?: string | number | void;
}
