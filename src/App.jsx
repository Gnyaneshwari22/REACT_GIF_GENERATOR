import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (

     <div className="w-full h-screen flex flex-col background" >
           <h1 className=" bg-white text-4xl rounded-md text-center font-bold mt-[40px] ml-[25px] mr-[25px] px-10 py-2 ">RANDOM GIFS</h1>

           <div className="flex flex-col w-full gap-y-10 mt-[30px]  items-center">
               <Random/>

                <Tag/>
           </div>

     </div>
  );
}
