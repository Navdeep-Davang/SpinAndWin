import Image from 'next/image';
import React from 'react';


const BetSlip = () => {
  return (
    <div className="h-28 px-2 py-9 flex justify-center items-center gap-3">
      <div className="bet-input px-2 flex justify-center items-center gap-2 overflow-hidden">
        <Image className="w-6 h-6" src="/roulette/Coin.png" alt="Coin Icon" />
        <div className="text-input w-36">Enter bet amount...</div>
      </div>
      <div className="bet-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">+0.01</div>
      </div>
      <div className="bet-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">+0.1</div>
      </div>
      <div className="bet-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">+0.5</div>
      </div>
      <div className="bet-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">×2</div>
      </div>
      <div className="bet-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">1/2</div>
      </div>
      <div className="bet-max-button px-5 py-3 flex justify-center items-center">
        <div className="grow shrink text-center">Max</div>
      </div>
      <div className="bet-clear-button px-5 py-3 flex justify-center items-center">
        <div className="text-center">Clear</div>
      </div>
    </div>
  );
};

export default BetSlip;