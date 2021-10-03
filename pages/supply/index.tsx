import Header from '../../components/Header';
import Head from 'next/head';
import AssetSupply from '../../components/AssetSupply';
import { useSubscription } from '@apollo/client';
import { GET_ASSET_SUPPLY } from '../../graphql/queries/getAssetSupply';
import { useDgraphClient } from '../../lib/dgraphClient';
import Loading from '../../components/Loading';
import Notice from '../../components/Notice';

const Supply: React.FC = ({ theme, changeTheme }: any) => {
  const assetSupplyClient = useDgraphClient();

  const { loading, error, data } = useSubscription(GET_ASSET_SUPPLY, {
    client: assetSupplyClient,
  });

  if (loading || error) {
    return <Loading height="90vh" width="100vw" />;
  }

  return (
    <>
      <Head>
        <title>Tefi App - Asset Supply</title>
      </Head>
      <Header theme={theme} changeTheme={changeTheme} />
      <Notice>
        Data is inaccurate atm. Refer to{' '}
        <a href="https://terra.smartstake.io/history" target="_blank" style={{ color: 'blue' }}>
          Smart Stake.
        </a>
      </Notice>
      <AssetSupply assetSupply={data?.queryAssetSupply} />
    </>
  );
};

export default Supply;
