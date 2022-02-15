import { MouseEventHandler } from "react";
import { Route } from "../shared";

type SortKey = keyof Route

type SortOrder = "asc" | "desc"

type SortingButtonProps = {
    columnHeader:SortKey;
    sortKey:SortKey;
    sortOrder:SortOrder;
    onClick:MouseEventHandler<HTMLButtonElement>;
}

const SortingButton = (props:SortingButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.sortOrder === "asc" && props.sortKey === props.columnHeader ? "🔺 " : "🔻 " }
        </button>
    )
}
export default SortingButton;