<<<<<<< HEAD
import { useState } from "react";

export default function TodoCreation() {

  const [input,setInput]=useState('')
  function inputChange(e) {
    e.preventDefault()
    setInput(e.target.value)
  }
  function buttonClick(e) {
    e.preventDefault()
    console.log(input);
  }

  return (
    <div className="one bg-slate-900 flex justify-center items-center p-12 py-10">
     <input value={input} onChange={inputChange} className="text-slate-900 mr-4 px-4 border-5 border-y-8 border-amber-50 rounded-2xl w-full" />
     <button onClick={buttonClick} className=" p-2 rounded-2xl border-2 w-2/4">+Add</button>
=======



export default function TodoCreation() {
  return (
    <div className="bg-slate-900 flex justify-center items-center">
     <input className="px-4 border-5 border-y-8 border-amber-50 rounded-2xl"></input>
     <button  className="text-gray-50 p-2 m-5 rounded-2xl border-2">+Add</button>
>>>>>>> d27bfab06b3ad17e75daf13c1ca4fdf9a801889d
    </div>
  );
}

