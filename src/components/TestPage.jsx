import React from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';


function TestPage(){
  return (
    <div>
      <AnimateKeyframes
        play={true}
        
        iterationCount="infinite"
        direction="alternate"
        duration={5}
        keyframes={[
          'transform: rotateX(0) rotateY(0) rotateZ(0)',
          'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
        ]}
      >
        <img src='https://picsum.photos/80/80'/>
      </AnimateKeyframes>
   </div>
  );
}


export default TestPage;
