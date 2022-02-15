import { FC } from "react";

type PlotSectionProps = {
    HeaderText:string;
}

const PlotSection:FC<PlotSectionProps> = ({HeaderText,children}) => {
    return(
        <div className="flex flex-col m-3 border rounded-lg">
            <h1 className="headline2 m-3 basis-1/4">{HeaderText}</h1>
            <div className="basis-3/4">
                {children}
            </div>
        </div>
    )
}
export default PlotSection;