// import type { ReactElement } from "react";

import type { ReactElement } from "react";

// type varients = "primary" | "secondary";
// export interface ButtonProps {
//     varient: varients;
//     size: "sm" | "md" | "lg";
//     text: string;
//     startIcon?: ReactElement;
//     endIcon?: ReactElement;
//     onClick: () => void;
// }

// const varientStyles = {
//     "primary": "bg-purple-600 text-white",
//     "secondary": "bg-purple-300 text-purple-600"
// }

// const defaultStyles = "rounded-md flex";

// const sizeStyles = {
//     "sm": "py-1 px-2",
//     "md": "py-2 px-4",
//     "lg": "py-4 px-6"
// }

// export const Button = (props: ButtonProps) => {
//     return <button className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`}>
//         {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
//     </button>
// }

// <Button varient="primary" size="md" onClick={() => {}} text={"asd"} />

interface ButtonInterface {
    title: string;
    size: "lg" | "md" | "sm";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    varient: "primary" | "secondary";

}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm"
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

export function Button(props: ButtonInterface){
    return <button className={sizeStyles[props.size] + " " + varientStyles[props.varient]}>
        <div className={"flex items-center"}>
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.title}
            </div>
            {props.endIcon}
        </div>
    </button>
}
