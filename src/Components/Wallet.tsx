import { Wallet, ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance, Identity } from '@coinbase/onchainkit/identity';

export default function WalletComponent() {
  return (
    <div className="flex justify-end p-4 bg-white shadow-md rounded-lg">
      <Wallet>
        <ConnectWallet className="bg-blue-800 text-white px-4 py-2 rounded-lg">
          <Avatar className="h-6 w-6" />
          <Name className="ml-2" />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2 hover:bg-blue-200" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownDisconnect className="hover:bg-blue-200" />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}
