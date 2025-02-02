import SwapComponent from '../Components/Swap';
import WalletComponent from '../Components/Wallet';
import '../App.css';  // Import global styles
import BuyComponent from '../Components/Buy';


const MarketPage = () => {
  return (
    <>
      {/* Wallet Component - Top Right */}
      <div className="w-full flex justify-end mb-8">
        <WalletComponent />
      </div>

      {/* Swap Component - Centered */}
      <div className="w-full flex justify-center mb-8">
        <SwapComponent />
      </div>

      <div className="w-full flex justify-center mb-8">
        <BuyComponent />
      </div>

    </>
  );
};

export default MarketPage;