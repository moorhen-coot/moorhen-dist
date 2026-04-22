import { useEffect } from "react";
import { useRef } from 'react';
import { MoorhenProvider } from "moorhen";
import { MoorhenContainer } from "moorhen";
import { webGL } from 'moorhen/types/mgWebGL';
import { moorhen } from 'moorhen/types/moorhen';
import { serverRoot }  from '../serverRoot';

export const MoorhenExitMenu = (props: { exitCallback: () => void }) => {
    useEffect(() => {
        props.exitCallback();
    }, []);

    return <span>Saving...</span>;
};

export const MoorhenApp = (props) => {

    let rootPrefix = ""
    let urlPrefix = "/MoorhenAssets"
    if((serverRoot as string)!=="./"){
        rootPrefix = (serverRoot as string).replace(/\/$/g, '')
        urlPrefix = rootPrefix+"/MoorhenAssets"
    }

    const glRef = useRef<webGL.MGWebGL | null>(null)
    const commandCentre = useRef<moorhen.CommandCentre | null>(null)

    const collectedProps = {
        glRef, commandCentre, urlPrefix
    }

    return (
        <MoorhenProvider>
            <MoorhenContainer />
        </MoorhenProvider>
    );
};

