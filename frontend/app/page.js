import Image from "next/image";
import Navbar from "@/Components/Navbar";
import MainBox from "../Components/MainBox";
import Test_Shower from "@/Components/Test_Shower";

export default function Home() {
  return (
    <div className="">
      <Navbar />  
      <MainBox />
      <Test_Shower />
    </div>
  );
}
