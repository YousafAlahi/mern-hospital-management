
import React from "react";
import {HashLoader} from 'react-spinners/HashLoader'

const Loading = () => {
    return(
        <div className="w-full h-full flex items-center justify-center">
            <HashLoader color="#0067FF"/>
        </div>

    )
};


export default Loading;