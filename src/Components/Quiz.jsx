import {useState,useRef} from "react"
import "./Quiz.css";
import {NavLink} from "react-router-dom";

const Quiz = () => {
    const data = [
        {
            question:"What is the capital of india?",
            option1:"Delhi",
            option2:"Kolkata",
            option3:"Rajasthan",
            option4:"Gujrat",
            ans:1,
        },
        {
            question:"Which continent has the highest number of countries?",
            option1:"Asia",
            option2:"Europe",
            option3:"North America",
            option4:"Africa",
            ans:4,
        },
        {
            question:"Junk e-mail is also called?",
            option1:"Spam",
            option2:"Fake",
            option3:"Archived",
            option4:"Bin",
            ans:1,
        },
        {
            question:"Which state is the largest state in india by area?",
            option1:"Maharashtra",
            option2:"Gujrat",
            option3:"Rajasthan",
            option4:"Uttar Pradesh",
            ans:3,
        },
        {
            question:"First page of website is termed as?",
            option1:"Index Page",
            option2:"Homepage",
            option3:"Sitemp",
            option4:"Pen Drive",
            ans:2,
        },
    ];

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let [index, setIndex] =  useState(0);
    const [question,setQuestion] = useState(data[index]);
    const [lock,setLock] = useState(false);
    const [score, setScore] =useState(0);
    let [result,setResult] =useState(false);
     
    let option_arr = [option1,option2,option3,option4];

    const checkANs = (e,ans) =>{

        if(lock===false){

            if(question.ans===ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev+1);
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
            }

        }

    }

    const next = () =>{

        if(lock===true){

            if(index===data.length-1){
                setResult(true);
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_arr.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            })
        }

        else{
            alert("Please Select a option");
        }

    }

   /* const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    } */
  return (
    <div className=" flex h-screen justify-center items-center p-5">
      <div className=" shadow-md p-9 shadow-black rounded-xl
       flex flex-col gap-2 max-w-md ">
        <div className=" text-2xl font-bold">
            <h1>Quiz Time</h1>
            <hr className=" md:w-80" />
        </div>

        {result ? <></> :<>
            <div className=" flex flex-col gap-2">
            <h1 className=" text-xl">{index+1}.{question.question}</h1>

            <ul className=" flex flex-col gap-2">
                <li ref={option1} className=" border-2 p-2 rounded-md" onClick={(e)=>checkANs(e,1)}>{question.option1}</li>
                <li ref={option2} className=" border-2 p-2 rounded-md" onClick={(e)=>checkANs(e,2)}>{question.option2}</li>
                <li ref={option3} className=" border-2 p-2 rounded-md" onClick={(e)=>checkANs(e,3)}>{question.option3}</li>
                <li ref={option4} className=" border-2 p-2 rounded-md" onClick={(e)=>checkANs(e,4)}>{question.option4}</li>
            </ul>
        </div>

        <div className=" flex justify-center">
            <button className="border-2 p-2 w-20 rounded-md text-white
             bg-violet-700" onClick={next}>Next</button>
        </div>

        <div className="text-center">
            {index+1} of {data.length} questions
        </div>
        </>}

        {
            result ? <>
            <h1 className="text-xl">Your Score is {score} out of {data.length}</h1>
            <NavLink to="/"><button className="border-2 p-2 w-20 rounded-md text-white
             bg-violet-700 ">Reset</button></NavLink>
            </> : <></>
        }

      
      </div>
    </div>
  )
}

export default Quiz;
