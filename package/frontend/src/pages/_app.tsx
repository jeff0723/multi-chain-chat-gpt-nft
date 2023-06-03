import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import { Provider } from 'react-redux';
import store from "../state";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';

import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, aurora, gnosis } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import ApplicationUpdater from '@/state/updater';


const { chains, publicClient } = configureChains(
  [gnosis, aurora, mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'Chat GPT NFT',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Chat GPT NFT',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
          <ApplicationUpdater />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  )
}
