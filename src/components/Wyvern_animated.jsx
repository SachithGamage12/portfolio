import React, { forwardRef, useImperativeHandle, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export const Astronaut = forwardRef((props, ref) => {
  const group = useRef();
  const modelRef = useRef();

  const { scene, animations } = useGLTF("/models/wyvern_animated.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGLTF("/models/wyvern_animated.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Expose ref to parent for Rig
  useImperativeHandle(ref, () => modelRef.current);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* This is the visible model */}
      <group
        ref={modelRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.03} // normalized scale
        position={[0, 0, 0]} // lift model to center
      >
        <primitive object={clone} />
      </group>
    </group>
  );
});

useGLTF.preload("/models/wyvern_animated.glb");
