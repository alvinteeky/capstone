import React from "react";
import './Reserve.css';

const Reserve = (props) => {

    return (
        <div className="reserve_buttons">
            
            <button  className='btn-reserve' type='submit' disabled={props.value}>Submit</button>

        </div>
    )
};

export default Reserve;