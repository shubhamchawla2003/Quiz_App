import {NavLink} from "react-router-dom";
const Home = () => {
  return (
    <div className=" flex justify-center items-center
     h-screen">
     <div className=" shadow-md p-8 flex flex-col gap-2 shadow-black rounded-md">
     <h1 className=" text-3xl font-bold">Join quiz</h1>
      <NavLink to="/quiz" className=" flex justify-center"><button className="border-2 p-2 w-20 rounded-md text-white
             bg-violet-700 text-xl">Start</button></NavLink>
     </div>
    </div>
  )
}

export default Home
