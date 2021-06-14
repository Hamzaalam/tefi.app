import Head from 'next/head';
import styled from 'styled-components';
import { getBorrowedValue, getBorrowLimit, getCollaterals } from './api/anchor/lib/borrow';
import { getAPY, getTotalDesposit } from './api/anchor/lib/earn';

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const address = 'terra1amhhduzslqngw40fp2f28zse0mnghrmwf3apnm';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>NextJs BoilerPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Earn</h1>
        <button onClick={() => getTotalDesposit({ address })}>getTotalDesposit</button>
        <button onClick={() => getAPY()}>getAPY</button>
      </div>
      <div>
        <h1>Borrow</h1>
        <button onClick={() => getBorrowLimit({ address })}>getBorrowLimit</button>
        <button onClick={() => getBorrowedValue({ address })}>getBorrowedValue</button>
        <button onClick={() => getCollaterals({ address })}>getCollaterals</button>
      </div>
      <div>
        <h1>ANC</h1>
        <button onClick={() => {}}>getBalance</button>
      </div>
    </Container>
  );
}
