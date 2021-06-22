import css from '@styled-system/css';
import { BorrowingTitle } from '../../constants';
import { TotalBorrowed } from './dummy';
import { Wrapper, Row, HeadingWrapper, Heading, Title, StyledText } from '../dashboardStyles';
import { Flex } from '@contco/core-ui';
import Styled from 'styled-components';
import PercentageBar from '../PercentageBar';

const HEADING_TEXT = `Borrowing`;

const CSS_NET_APR = (props) =>
  css({
    fontWeight: 500,
    color: props.theme.colors.secondary,
  });

const StyledPercentage = Styled(Flex)`
 ${css({
   justifyContent: 'center',
   py: [20, 30, null, 80],
   px: [20, 40, null, 60],
 })}
`;

export interface BorrowingProps {
  ancAssets: AccountAnc;
}

const Borrowing: React.SFC<BorrowingProps> = ({ ancAssets }) => {
  const borrows = [ancAssets.debt];

  return (
    <Wrapper
      css={`
        ${css({ mb: 0 })}
      `}
    >
      <HeadingWrapper>
        <Heading>{HEADING_TEXT}</Heading>
        <StyledText>{TotalBorrowed}</StyledText>
      </HeadingWrapper>
      <Row>
        {BorrowingTitle.map((t, index) => (
          <Title key={index}>{t}</Title>
        ))}
      </Row>
      {borrows?.map((a: BorrowData, index) => {
        if (a.collaterals) {
          return (
            <Row key={index}>
              <StyledText> {(parseFloat(a?.collaterals[0]?.balance) / 1000000).toFixed(3)} LUNA</StyledText>
              <StyledText> ${parseFloat(a?.value).toFixed(3)}</StyledText>
              <StyledText css={CSS_NET_APR}> {a?.reward?.apy}%</StyledText>
            </Row>
          );
        } else {
          return null;
        }
      })}
      <StyledPercentage>
        <PercentageBar percentageValue={52.21} />
      </StyledPercentage>
    </Wrapper>
  );
};

export default Borrowing;
