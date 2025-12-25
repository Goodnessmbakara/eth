'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createAppKit } from '@reown/appkit/react'; 
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { ReactNode } from 'react';

// Configure chains & providers
const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Create a client
const queryClient = new QueryClient();

// Create Wagmi adapter
const wagmiAdapter = new WagmiAdapter({ config, queryClient });

// Metadata 
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia],
  metadata: metadata,
  projectId: 'YOUR_PROJECT_ID', // Placeholder, user needs to set this
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
});

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
