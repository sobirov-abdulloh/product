import { nanoid } from "nanoid";
import React, { useState, useContext } from "react";
import { StateContext } from "../../Context/context";
import { ADD_TASK } from "../../Reduser/type";
import "./Home.css";
function Home() {
  const [vazifaNomi, setVazifaNomi] = useState("");
  const [vazifaVaqti, setVazifaVaqti] = useState("");
  const { dispatch } = useContext(StateContext);
  const addBtn = () => {
    const vazifalar = {
      vazifaNomi,
      vazifaVaqti,
      id: nanoid(),
      done: false,
    };
    dispatch({ type: ADD_TASK, payload: vazifalar });
    setVazifaNomi("");
    setVazifaVaqti("");
  };
  return (
    <div className="home">
      <input
        value={vazifaNomi}
        onChange={(e) => setVazifaNomi(e.target.value)}
        type="text"
        placeholder="vazifa nomi"
      />
      <input
        value={vazifaVaqti}
        onChange={(e) => setVazifaVaqti(e.target.value)}
        type="text"
        placeholder="vazifa vaqti"
      />
      <button onClick={addBtn}>kiritish</button>
    </div>
  );
}

export default Home;
