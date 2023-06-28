import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
// import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


const Blob = () => {

  return (
    <div>
    <AnimatedCursor
    innerSize={10}
    outerSize={15}
    color='50, 139, 255'
    outerAlpha={0.2}
    innerScale={1}
    outerScale={8}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />

  </div>
  )
}

export default Blob;
