import styled from 'styled-components';
import css from '@styled-system/css';
import { Text, Flex, Box } from '@contco/core-ui';
import { Logo } from './AnimatedCircle';
import Collection from './Collection';
import { useEffect, useState } from 'react';

const MainContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  ${css({
    height: ['calc(100vh - 300px)'],
  })}
`;

const Container = styled(Box)`
  align-items: center;
  justify-content: center;
`;

const BigCircle = styled(Flex)`
  border-radius: 50%;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  ${(props) =>
    css({
      width: props.isBig ? ['170px', null, '300px'] : ['170px', null, '200px'],
      height: props.isBig ? ['170px', null, '300px'] : ['170px', null, '200px'],
      bg: 'secondary',
    })};
`;

const BigText = styled(Text)`
  font-weight: 900;
  letter-spacing: 0.77px;
  ${css({
    fontSize: ['30px', null, '40px', '60px', null, null, null, '60px'],
    mt: [8],
    color: 'Heading',
  })}
`;

interface Props {
  currentTheme: string;
  text?: string;
  isBig?: boolean;
  address?: string;
}

interface NftProps extends Props {
  nftAssets: any | null;
  loading: boolean;
}

const DEFAULT_TEXT = 'COMING SOON';

export const AnimatedCircle: React.FC<Props> = ({ currentTheme, isBig = false }) => {
  return (
    <BigCircle isBig={isBig}>
      <Logo width="100%" currentTheme={currentTheme} />
    </BigCircle>
  );
};


const NftComponent: React.FC<NftProps> = ({ currentTheme, text = DEFAULT_TEXT, isBig = false, address, nftAssets, loading}) => {
  return (
    <div>
      {!loading ? (
        <Collection data={nftAssets} currentTheme={currentTheme} address={address} />
      ) : (
        <MainContainer>
          <Container>
            <AnimatedCircle currentTheme={currentTheme} isBig={isBig} />
          </Container>
        </MainContainer>
      )}
    </div>
  );
};

export default NftComponent;
