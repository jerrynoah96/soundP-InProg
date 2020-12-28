import React from 'react';
import "../App.css";

const BuffersList = (props) =>{

  const buffers = props.buffers;
  const buffersList = buffers.map(buffer => {
    return (
      <div className="buffer-div">
        <p>{ buffer}
        </p>
      </div>
    )
  })
  

  return(
    <div className="buffers-list">
        {buffersList}
    </div>
  )

}

export default BuffersList;