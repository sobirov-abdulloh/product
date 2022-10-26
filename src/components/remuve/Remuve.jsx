import { StateContext } from "../../Context/context";
import { REMUVE_TASK } from "../../Reduser/type";

import React, { useContext } from "react";

function Remuve({vazifaNomi, vazifaVaqti, id, done}) {
  const { state, dispatch } = useContext(StateContext);
  console.log(state.trash);
  console.log(state.tasks);

    const remuveBtn=()=>{
        dispatch({type:REMUVE_TASK,payload:id})
        // alert("oka kilomadim buni uzur ochirib qoyin hohlasez")
    }
  return (
    <div>
      <div className="task">
        <h2>
          {vazifaNomi} - {vazifaVaqti}
        </h2>
        <button onClick={remuveBtn}>remuve</button>
      </div>
    </div>
  );
}

export default Remuve;
