import { Buy } from '@coinbase/onchainkit/buy'; 
import type { Token } from '@coinbase/onchainkit/token';

const degenToken: Token = {
  name: 'DEGEN',
  address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
  symbol: 'DEGEN',
  decimals: 18,
  image: 'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/3b/bf/3bbf118b5e6dc2f9e7fc607a6e7526647b4ba8f0bea87125f971446d57b296d2-MDNmNjY0MmEtNGFiZi00N2I0LWIwMTItMDUyMzg2ZDZhMWNm',
  chainId: 8453,
};

export default function BuyComponent() { 
  return ( 
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Buy DEGEN Token</h2>
      <Buy toToken={degenToken} isSponsored /> 
    </div>
  );
}
