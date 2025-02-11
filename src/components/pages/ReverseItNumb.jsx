import { useState } from "react";
import { grabReverseItNumb } from "../../../Services/DataServices";


const reverseItNumb = () => 
{
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const reverseItData = async () => 
  {
    const data = await grabReverseItNumb(userInput)
    setResponse(data);
  };


  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            Reverse it (Numbers) <hr className="inline-block w-[65%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - endpoint that accepts a sequence of only numbers and reverses them. Be sure to display the original characters before the reversed. For example:- "You entered 12345, reversed is 54321"
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 8
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">
        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter a sequence of numbers here</h3>

            <input type="text" id="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Enter your sequence here" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{response}</h2>
            
            <button onClick={reverseItData} className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>
      </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default reverseItNumb;
