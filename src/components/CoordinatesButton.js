import React from 'react'

const CoordinatesButton = (props) =>
{
  return(
  
    <button onClick={e =>
      { return props.onReceiveCoordinates([e.clientX,e.clientY]) }
    }
    >Log Mouse Position</button>
  
  )
}

const handleClick = (e,callback) =>
{
  debugger;
  
}

export default CoordinatesButton;