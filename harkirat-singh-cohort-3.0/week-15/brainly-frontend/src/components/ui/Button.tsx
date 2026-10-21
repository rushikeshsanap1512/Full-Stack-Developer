import type { ReactElement } from "react";

type varients = "primary" | "secondary";
export interface ButtonProps {
    varient: varients;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const defaultStyles = "rounded-md flex";

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

export const Button = (props: ButtonProps) => {
    return <button className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}

<Button varient="primary" size="md" onClick={() => {}} text={"asd"} />