import React from 'react'

const DelayedButton = (props) =>
{
  return( <button onClick=
  {e =>
    {
      e.persist()
      setTimeout((() => {        
        props.onDelayedClick(e)
      }),props.delay);
    }
  }></button> ) 
}

export default DelayedButton;