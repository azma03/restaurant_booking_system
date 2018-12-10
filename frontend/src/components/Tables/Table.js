import React from 'react';

const Table = (props) => {

  if(props.available===true){

    return(
      <button
        id = "table-button-green"
        className = "table-button"
        type = "submit">
        TABLE {props.id} (Seats {props.capacity})
      </button>
    )};

    return(
      <button
        id = "table-button-red"
        className = "table-button"
        type = "button" disabled>
        TABLE {props.id} (Seats {props.capacity})
      </button>
    );
};

export default Table;
