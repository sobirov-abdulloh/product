import React, { useContext } from "react";
import Remuve from '../../components/remuve/Remuve'
import { StateContext } from "../../Context/context";

function Trash() {
const { state } = useContext(StateContext);
console.log(state.trash)
  return (
    <div>
    <h1>Jami vazifa</h1>
    {state.trash.length > 0 ? (
      state.trash.map((item, index) => <Remuve key={item.id} {...item} />)
    ) : (
      <h3>Hali ochirilgan vazifa yoq</h3>
    )}
  </div>
  )
}

export default Trash