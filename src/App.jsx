import { NavLink } from 'react-router-dom';
import './App.css'
import NavBarComponent from './components/NavBarComponent';
function App() 
{

  return (
    <>
    
    <div className="relative w-full h-screen overflow-hidden">
        {/* Navbar Inside Hero */}
        <NavBarComponent />

        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/heroImage.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">
            Code &#123; Inside &#125;
          </h1>
          <h4>AllForOne</h4>
          <h4 className="text-stone-400">|| By Andrew Sayasing</h4>
        </div>

        {/* Gradient Fade Effect at the Bottom */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </div>

  {/* About Section */}
    <div className="contianer mx-10">
        <section className="mt-20">
      <h2> About <hr className="inline-block w-[35%] md:w-[86%] border-3 m-4"/></h2>
      <h3 className="text-stone-500 italic mx-20 font-light text-3xl md:text-4xl"> Code Inside (All For One) is a collective of Mini Challenge assignments made with HTML, CSS, and Js. All challenges pull from an API with each of their own endpoints. This website is kept as a interactive repository for the following assignments. </h3>
      <h2 className="flex justify-end text-5xl md:text-6xl">  <hr className="inline-block w-[80%] md:w-[80%] border-3 mt-12 me-5"/>Code Inside</h2>
        </section>
      
       <div className="contianer mt-50">
        <div className="place-items-center">
            <h1> Repository</h1> 
            <p className="text-[20px] text-stone-500"> || Mini challenges [1 - 10]</p>
        </div>
      </div>
    </div>

  {/* Repository Section */}
    <div className="mt-20 grid grid-cols-1 gap-10 place-items-center mx-40 md:gap-20 md:grid-cols-3">
            
      <NavLink to="/helloWorld" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointe whitespace-nowrap">
        <h4>Mini Challenge 1</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/helloWorld" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>"Hello World"</h4>
      </NavLink>

      <NavLink to="/Adding" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 2</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/Adding" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“Adding Two Numbers”</h4>
      </NavLink>

      <NavLink to="/AskingQuestions" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
              <h4>Mini Challenge 3</h4>
            </NavLink>
            <span className="dot"></span>
            <NavLink to="/AskingQuestions" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
              <h4>"Asking Questions"</h4>
            </NavLink>

      <NavLink to="/GreaterOrLess" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 4</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/GreaterOrLess" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“GreaterOrLess”</h4>
      </NavLink>

        <NavLink to="/MadLib" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
              <h4>Mini Challenge 5</h4>
            </NavLink>
            <span className="dot"></span>
            <NavLink to="/MadLib" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
              <h4>“Mad Lib”</h4>
            </NavLink>

      <NavLink to="/OddOrEven" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 6</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/OddOrEven" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“Odd Or Even”</h4>
      </NavLink>

      <NavLink to="/ReverseItAlpha" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 7</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/ReverseItAlpha" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“Reverse It (Alphanumeric)”</h4>
      </NavLink>

      <NavLink to="/ReverseItNumb" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 8</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/ReverseItNumb" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“Reverse It (Numbers only)”</h4>
      </NavLink>

      <NavLink to="/Magic8Ball" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 8</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/Magic8Ball" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>“Magic 8 Ball”</h4>
      </NavLink>

      <NavLink to="/ResturantPicker" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">
        <h4>Mini Challenge 10</h4>
      </NavLink>
      <span className="dot"></span>
      <NavLink to="/ResturantPicker" className="hover:text-stone-600 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap md">
        <h4>“Restaurant Picker”</h4>
      </NavLink>
        </div>

      <br className="mt-10"/>
    </>
  )
}

export default App
