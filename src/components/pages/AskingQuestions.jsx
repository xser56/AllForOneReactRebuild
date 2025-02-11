import { grabAskingQuestions } from "../../../Services/DataServices";
import { useState } from "react";

const askingQuestions = () => 
  {
  const [userName, setUserName] = useState("");
  const [userWakeTime, setUserWakeTime] = useState("");
  const [response, setResponse] = useState("")

  const askQuestionsData = async () => 
  {
    const data = await grabAskingQuestions(userName, userWakeTime)
    setResponse(data);

    if (userName.trim() === "" && userWakeTime.trim() === "") 
    {
      return setResponse("Please enter your name and wake up time into both fields");
    }
    
    const wakeTime = Number(userWakeTime);
    if (wakeTime > 12 || wakeTime < 0) 
    {
      return setResponse("Wake up time should be between 1 and 12.");
    }
    
    if (!Number.isInteger(wakeTime)) 
    {
      return setResponse("Wake up time must be an integer.");
    }
  }

  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            Asking Questions <hr className="inline-block w-[70%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
          - endpoint that accepts 2 inputs. You will take the answer from those inputs and display the answer in one sentence.- What is your name? - What time did you wake up?
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 3
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">

        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter your name here</h3>
            <input type="text" id="input" value={userName} onChange={(e) => setUserName(e.target.value)} 
            placeholder="Enter your name" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>
            
          <h3 className="text-5xl font-semibold mb-4 pt-14"> Enter what time you wake up here</h3>
            <input type="text" id="input" value={userWakeTime} onChange={(e) => setUserWakeTime(e.target.value)} 
            placeholder="Enter your wake up time" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{response}</h2>
            
            <button onClick={askQuestionsData} className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>
      </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default askingQuestions;
