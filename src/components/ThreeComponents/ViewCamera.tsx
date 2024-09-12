import {PerspectiveCamera, Quaternion, Vector3} from "three";
import {LegacyRef, useEffect} from "react";

type propsType = {
    position: [number, number, number],
    quaternion: [number, number, number, number],
    cameraSet: LegacyRef<typeof PerspectiveCamera[]>,
    imageIndex: number
}

const ViewCamera = (props: propsType) => {
    useEffect(() => {
        const viewCamera = props.cameraSet.current[props.imageIndex];
        viewCamera.position.copy(new Vector3(...props.position));
        viewCamera.quaternion.copy(new Quaternion(...props.quaternion));

    }, [props.position, props.quaternion, props.cameraSet, props.imageIndex])

    return <primitive object={props.cameraSet.current[props.imageIndex]} {...props}/>
}

export default ViewCamera;
