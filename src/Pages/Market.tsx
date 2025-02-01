// Pages/Market.tsx

import SwapComponent from '../Components/Swap';
import WalletComponent from '../Components/Wallet';
import BuyComponent from '../Components/Buy';

function Market(){
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-8">
     
      <h1 className="text-2xl font-bold mb-8 text-center">Crypto Transactions</h1>
      <div className="w-full flex justify-end mb-8">
        <WalletComponent />
      </div>
      <div className="w-full flex justify-center mb-8">
        <SwapComponent />
      </div>
      <hr></hr>
      <div className="w-full flex justify-center mt-3">
        <BuyComponent />
      </div>
    </div>
  );
};

export default Market;
