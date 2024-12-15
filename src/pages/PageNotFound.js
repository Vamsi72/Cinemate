import pgnf from "../assets/images/pgnf3.png";
import {Link } from "react-router-dom";
import { Button } from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title="Page Not Found - Cinemate"
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2 ">
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text-white ">404,OOPSSS!!</p>
         <div className="max-w-lg">
          <img className="rounded-3xl" src={pgnf} alt="page not found" />
          <p className="text-2xl text-center  dark:text-white">Wrong Url Entered, Please Back to Home..</p>
         </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <Button>Back To Home</Button>
          </Link>
        </div>
         
      </section>
    </main>
  )
}
