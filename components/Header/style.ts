
import styled from 'styled-components';
import css from '@styled-system/css';
import { Flex, Box, Text } from '@contco/core-ui';
import LIGHT_SWITCH_ICON from '../../public/light-switch.svg';
import DARK_SWITCH_ICON from '../../public/dark-switch.svg';
import WALLET_ICON from "../../public/wallet.svg";
import CLOSE_ICON from "../../public/close.svg";
import TEFI_LOGO from '../../public/tefi.svg';

export const Container = styled(Flex)`
${props => css({
  height: '64px',
  backgroundColor: props.theme.colors.primary,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: '100'
})}
`;

export const LeftSection = styled(Flex)`
  ${css({
  flexDirection: 'row',
  alignItems: 'center',
  ml: [1, null, null, 3],
})}
`;

export const StyledLogoIcon = styled(TEFI_LOGO)`
  ${props => css({
  transform: ['scale(0.6)', null, null, null, 'scale(0.7)'],
  '.tefi_svg__tirangleElement': {
    fill: props.theme.colors.secondary
  },
  '.tefi_svg__lineElement': {
    stroke: props.theme.colors.secondary
  },
  '.tefi_svg__circleElement': {
    fill: props.theme.colors.secondary,
    opacity: props.theme.opacity.logo
  }
})}
`;
export const StyledTitle = styled(Text)`
  ${props => css({
  color: props.theme.colors.secondary,
  fontSize: 26,
  fontWeight: 900,
  letterSpacing: 0.5,
  lineHeight: 0.88
})}
 & > * {
   font-weight:500;
 }
`;

export const RightSection = styled(Flex)`
  ${css({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  mr: [1, null, null, 3],
  width: [150, null, 480],
})}
`;

export const WalletContainer = styled(Flex)`
${props => css({
  width: 150,
  height: 35,
  borderRadius: 50,
  border: `solid 2px ${props.theme.colors.secondary}`,
  mr: [1, null, null, 3],
  cursor: 'pointer',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  p: 1
})}
`;
export const WalletIcon = styled(WALLET_ICON)`
${props => css({
  transform: ['scale(0.6)', null, null, null, 'scale(0.5)'],
  transition: 'opacity 0.3s',
  '.wallet_svg__iconElement': {
    fill: props.theme.colors.secondary,
    width: 40,
  },
})}
  &:hover {
    opacity: 0.7;
  }
`;
export const StyledAddressText = styled(Text)`
  ${props => css({
  color: props.theme.colors.secondary,
  fontSize: ['6px', null, '8px'],
  fontWeight: 900,
  letterSpacing: 0.5,
  lineHeight: 0.88,
  width: 60,
})}
`;
export const CloseIcon = styled(CLOSE_ICON)`
${css({
  transform: ['scale(0.5)', null, null, null, 'scale(0.5)'],
  transition: 'opacity 0.3s',
  width: 30
})}
& > * {
  stroke: ${(props) => props.theme.colors.secondary};
}
  &:hover {
    opacity: 0.7;
  }
`;

export const SwitchContainer = styled(Flex)`
  ${props => css({
  color: props.theme.colors.secondary,
  minWidth: [30, null, 40],
  justifyContent: 'center',
  alignItems: 'center',

})}
`;
export const LightSwitchIcon = styled(LIGHT_SWITCH_ICON)`
${css({
  transition: 'opacity 0.3s',
  cursor: 'pointer',
  marginBottom: '4px'
})}
  &:hover {
    opacity: 0.7;
  }
`;
export const DarkSwitchIcon = styled(DARK_SWITCH_ICON)`
${css({
  transition: 'opacity 0.3s',
  cursor: 'pointer',
  marginBottom: '5px'
})}
  &:hover {
    opacity: 0.7;
  }
`;
