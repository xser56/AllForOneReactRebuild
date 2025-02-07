import { grabAddTwo } from "../../../Services/DataServices";
import { useState } from "react";

const AddTwoStates = () => {
  const [userNum1, setUsernum1] = useState("");
  const [userNum2, setUsernum2] = useState("");
  const [sum, setSum] = useState("");

  const AddTwo = async () => {
    if (userNum1.trim() === "" && userNum2.trim() === "")
    {
      setGreeting("Please enter Two numbers to Add");  
    } else 
    {
      setGreeting(`Your First number is, ${userName}!`); 
    }
  };

  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            Adding Numbers <hr className="inline-block w-[71%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - endpoint that accepts 2 numbers. Once you have the numbers, add them together and print out the results in a sentence.
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 2
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">
        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter two numbers to add here</h3>
            
            <input type="text" id="input" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your first number" 
            className="w-64 p-2 border-2 mb-6 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>
            
            <input type="text" id="input" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your sercond number" className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{greeting}</h2>
            
            <button onClick={gretting} className="w-[150px] bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>
      </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default HelloWorld;
