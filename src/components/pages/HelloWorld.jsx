import { grabSayHello } from "../../../Services/DataServices";
import { useState } from "react";

const HelloWorld = () => 
{
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  const sayHello = async () => 
  {
    const data = await grabSayHello(userName)
    setGreeting(data)

    if (userName.trim() === "") 
    {
      setGreeting("Please enter your name.");  
    }
  };

  return (
    <>
      <div className="contianer mx-4 md:mx-20">
        <section className="mt-20">
          <h2>
            Hello World <hr className="inline-block w-[78%] border-3 m-4 text-2xl md:text-3xl md:whitespace-nowrap" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - an API endpoint that receives user input and outputs a
            personalized greeting, such as "Hello, user's name."
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 md:display-block" />
            <span className="">Mini Challenge 1 </span>
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">
        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter a Name Here</h3>

            <input type="text" id="input" value={userName} onChange={(e) => setUserName(e.target.value)} 
            placeholder="Enter your name" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{greeting}</h2>
            
            <button onClick={sayHello} 
            className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
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
