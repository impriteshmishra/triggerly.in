import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className=" max-w-[80%] mx-auto"> 
      <Header />
      <div className="text-3xl font-bold text-center mt-10">
        Triggerly – Automate More, <span className="text-blue-500">Work Less!</span>
      </div>
    </div>
  );
}
