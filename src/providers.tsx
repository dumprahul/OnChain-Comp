'use client';

import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // Use baseSepolia for testing

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base} // Change to baseSepolia if testing
    >
      {props.children}
    </OnchainKitProvider>
  );
}
