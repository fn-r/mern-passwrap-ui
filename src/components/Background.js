import React from 'react';
import { useEffect } from "react";

const Background = ( { children } ) =>
{
    useEffect(()  => {
        return () => {
            document.body.classList.add('bg-body');
            document.body.classList.add('dark:bg-gray-900');
            document.body.classList.add('transition');
            document.body.classList.add('duration-500');
        };
    });
    
    return (
        <div className="bg-body dark:bg-gray-900 w-full h-full transition duration-500">
            {children}
        </div>
    )
}

export default Background;