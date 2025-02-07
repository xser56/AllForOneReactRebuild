import './App.css'
import './components/NavBarComponent'
function App() 
{

  return (
    <>
    
  {/* <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        id="heroVideo"
        loop
        muted
        poster="/assets/heroImage.mp4"
      >
        <source src="/assets/heroImage.mp4" type="video/mp4" />
      </video> */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-white text-4xl font-bold">Code &#123; 
           Inside &#125; <br /></h1>
          <h4 className="text-white">AllForOne</h4>
          <h4 className="text-stone-400">|| By Andrew Sayasing</h4>
        </div>
  {/* About Section */}
    <div className="contianer mx-10">
        <section className="mt-20">
      <h2> About <hr className="inline-block w-[86%] border-3 m-4"/></h2>
      <h3 className="text-stone-500 italic mx-20 font-light"> Code Inside (All For One) is a collective of Mini Challenge assignments made with HTML, CSS, and Js. All challenges pull from an API with each of their own endpoints. This website is kept as a interactive repository for the following assignments. </h3>
      <h2 className="flex justify-end">  <hr className="inline-block w-[80%] border-3 mt-12 me-5"/>Code Inside</h2>
        </section>
      
       <div className="contianer mt-50">
        <div className="place-items-center">
            <h1> Repository</h1> 
            <p className="text-[20px] text-stone-500"> || Mini challenges [1 - 10]</p>
        </div>
      </div>
    </div>

  {/* Repository Section */}
    <div className="mt-20 grid grid-cols-3 place-items-center mx-40 gap-20">
            
            <h4 className=""> Mini Challenge 1 </h4>
            <span className="dot"></span> 
            <h4> "Hello World"</h4>

            <h4 className=""> Mini Challenge 2 </h4>
            <span className="dot"></span> 
            <h4> "Asking Questions</h4>

            <h4 className=""> Mini Challenge 3 </h4>
            <span className="dot"></span> 
            <h4>“Adding Two Numbers”</h4>

            <h4 className=""> Mini Challenge 4 </h4>
            <span className="dot"></span> 
            <h4>“Mad Lib”</h4>
            
            <h4 className=""> Mini Challenge 5 </h4>
            <span className="dot"></span> 
            <h4>“Odd Or Even”</h4>

            <h4 className=""> Mini Challenge 6 </h4>
            <span className="dot"></span> 
            <h4>“Reverse It (Alphanumeric)”</h4>

            <h4 className=""> Mini Challenge 7 </h4>
            <span className="dot"></span> 
            <h4>“Reverse It (Numbers only)””</h4>

            <h4 className=""> Mini Challenge 8 </h4>
            <span className="dot"></span> 
            <h4>“Magic 8 Ball”</h4>

            <h4 className=""> Mini Challenge 9 </h4>
            <span className="dot"></span> 
            <h4>“Guess It”</h4>

            <h4 className=""> Mini Challenge 10 </h4>
            <span className="dot"></span> 
            <h4>“Restaurant Picker”</h4>
        </div>
      <br className="mt-10"/>
    </>
  )
}

export default App
