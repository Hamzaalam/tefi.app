import { FC, ReactChildren, ReactChild, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import networks from '../utils/networks';

const DynamicWalletProvider: any = dynamic(
  () =>
    import('@terra-money/wallet-provider').then((module) => {
      return module.WalletProvider;
    }),
  { ssr: false },
);

export interface NetworkInfo {
  /** Network name (e.g. mainnet) */
  name: string;
  /** chainID (e.g. columbus-5) */
  chainID: string;
  /** lcd endpoint (e.g. https://lcd.terra.dev) */
  lcd: string;
  /** api endpoint (e.g. https://columbus-api.terra.dev) */
  api?: string;
  /** mantle endpoint (e.g. https://columbus-mantle.terra.dev) */
  mantle?: string;
  /** wallet connect ID (e.g. 2) */
  walletconnectID?: number;
}

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: networks.testnet,
  1: networks.mainnet,
};

interface WalletConnectProviderProps {
  children: ReactChild | ReactChildren | ReactNode;
}

const WalletConnectProvider: FC<WalletConnectProviderProps> = ({ children }) => {
  return (
    <DynamicWalletProvider
      defaultNetwork={networks.mainnet}
      walletConnectChainIds={walletConnectChainIds}
      connectorOpts={{ bridge: 'https://walletconnect.terra.dev/' }}
    >
      {children}
    </DynamicWalletProvider>
  );
};

export default WalletConnectProvider;
