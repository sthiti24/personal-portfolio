import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Pageloader(){

    return(
        <div className="pageloader" >
            <InfinitySpin 
             width='200'
             color="#240090"/>

        </div>
    )
}