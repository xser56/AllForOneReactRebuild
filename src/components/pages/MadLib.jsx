import { grabMadLib } from "../../../Services/DataServices";
import { useState } from "react";

const madLib = () => 
{
  const [userInput1, setUserInput1] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [userInput3, setUserInput3] = useState('');
  const [userInput4, setUserInput4] = useState('');
  const [userInput5, setUserInput5] = useState('');
  const [userInput6, setUserInput6] = useState('');
  const [userInput7, setUserInput7] = useState('');
  const [userInput8, setUserInput8] = useState('');
  const [userInput9, setUserInput9] = useState('');
  const [userInput10, setUserInput10] = useState('');
  const [response, setRespnse] = useState('');
  
  const madLibData = async () => 
    {
    const inputs = [userInput1, userInput2, userInput3, userInput4, userInput5, 
                    userInput6, userInput7, userInput8, userInput9, userInput10];

    if (inputs.some(input => !input.trim())) 
    {
      setRespnse("Please fill out ALL input fields to generate story");  
      return;
    } 

    const data = await grabMadLib(userInput1, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10)
    setRespnse(data)
    
  };


  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            MadLib <hr className="inline-block w-[80%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - an endpoint that accepts multiple inputs. Output should be a story based on those values.
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 5
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 mt-14 ">
        <h3 className="text-5xl font-semibold mb-7 pt-5"> Please Fill Out Each Input Field To Generate Your Story</h3>

            <div className="grid grid-rows-2 grid-cols-5 gap-12 pb-14">

              <input type="text" id="input1" value={userInput1} onChange={(e) => setUserInput1(e.target.value)} 
              placeholder="Enter a Name" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>
              
              <input type="text" id="input2" value={userInput2} onChange={(e) => setUserInput2(e.target.value)} 
              placeholder="Enter a Name " 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input3" value={userInput3} onChange={(e) => setUserInput3(e.target.value)} 
              placeholder="Enter a Store" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input4" value={userInput4} onChange={(e) => setUserInput4(e.target.value)} 
              placeholder="Enter a beverage" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input5" value={userInput5} onChange={(e) => setUserInput5(e.target.value)} 
              placeholder="Enter a snack" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input6" value={userInput6} onChange={(e) => setUserInput6(e.target.value)} 
              placeholder="Enter a sport" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input7" value={userInput7} onChange={(e) => setUserInput7(e.target.value)} 
              placeholder="Enter a movie" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input8" value={userInput8} onChange={(e) => setUserInput8(e.target.value)} 
              placeholder="Enter a restaurant" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

              <input type="text" id="input9" value={userInput9} onChange={(e) => setUserInput9(e.target.value)} 
              placeholder="Enter a videogame" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>
              
              <input type="text" id="input10" value={userInput10} onChange={(e) => setUserInput10(e.target.value)} 
              placeholder="Enter a food" 
              className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>
            
            </div>


            <button onClick={madLibData} className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>

            <h3 className="pt-10 flex justify-center text-4xl font-bold">{response}</h3>
            </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default madLib;
