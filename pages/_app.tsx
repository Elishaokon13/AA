import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  smartWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { TelosEvmTestnet } from "@thirdweb-dev/chains"
import { factoryAddress } from "../const";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={ TelosEvmTestnet }
      supportedWallets={[
        smartWallet(embeddedWallet(), {
          factoryAddress: factoryAddress,
          gasless: true,
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
