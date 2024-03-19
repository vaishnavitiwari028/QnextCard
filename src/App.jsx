import React from "react";
import Card from "./components/Card";
import InputField from "./components/InputField";

function App() {
  const cardData = {
    description: "How rapidly is the Indian startup ecosystem growing?",
    date: "August 15, 2022",
  };

  return (
    <div className="w-screen m-0 h-full bg-black flex flex-col gap-14 pt-10 items-center overflow-x-hidden">
      <div className="text-6xl font-bold text-center text-white">Our Blogs</div>
      <div className="flex flex-wrap justify-center gap-10">
        <Card {...cardData} />
        <Card {...cardData} />
        <Card {...cardData} />
      </div>
      <div className="max-w-screen-lg h-96 bg-[#F0F0F0] rounded-2xl flex items-center justify-between p-4 overflow-x-hidden">
        <div className="flex-1 p-20 flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">
            Ready to start working with us?
          </h2>
          <p>
            Welcome to our courses! Join Us for exploring CodeGain skills and
            achieve success
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center flex-col gap-3">
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <button className="bg-[#0BB3FB] rounded-3xl text-white text-left">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
