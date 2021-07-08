import { gql } from '@apollo/client';

export const getAssets = gql`
  query getAssets($address: String!) {
    assets(address: $address) {
      address
      core {
        coins {
          balance
          value
          price
          symbol
          name
        }
        staking {
          balance
          rewards
          stakedValue
          rewardsValue
          totalValue
          validator
        }
        total {
          assetsSum
          stakedSum
        }
      }
      mirror {
        mirrorStaking {
          symbol
          lpName
          stakedLpUstValue
          availableLpUstValue
          ustStaked
          ustUnStaked
          tokenStaked
          tokenUnStaked
          availableLP
          stakedLP
          rewards
          rewardsValue
          apr
        }
        mirrorHoldings {
          name
          symbol
          price
          balance
          value
        }
        airdrops {
          name
          quantity
          price
          round
        }
        total {
          mirrorHoldingsSum
          mirrorPoolRewardsSum
          mirrorPoolSum
          mirrorAirdropSum
        }
      }
      anchor {
        assets {
          amount
          symbol
          price
        }
        debt {
          reward {
            name
            apy
            staked
            reward
          }
          collaterals {
            balance
            collateral
          }
          value
          percentage
          price
        }

        earn {
          reward {
            name
            staked
            apy
            reward
          }
        }

        pool {
          reward {
            name
            staked
            apy
            reward
          }
          balance
          anc
          ust
          stakedValue
          stakableValue
        }
        gov {
          reward {
            name
            staked
            reward
            apy
          }
        }
        airdrops {
          name
          quantity
          price
          round
        }
        total {
          airdropSum
        }
        totalReward
      }
      pylon  {
        pylonHoldings {
          symbol
          name
          price
          balance
          value
        }
        pylonPool {
          symbol
          lpName
          stakedLpUstValue
          availableLpUstValue
          ustStaked
          ustUnStaked
          tokenStaked
          tokenUnStaked
          stakedLP
          rewards
          rewardsValue
          availableLP
          apy
        }
        pylonStakings  {
          symbol
          stakedValue
          rewards
          rewardsValue
          apy
          name
          balance
          totalValue
        }
        pylonAirdrops {
          name
          price
          quantity
        }
        pylonSum {
          pylonHoldingsSum
          pylonStakingSum
          pylonPoolSum
          pylonPoolRewardsSum
          pylonAirdropSum
          pylonStakingRewardsSum
          gatewayRewardsSum
          gatewayDepositsSum
        }
        pylonGateway {
          symbol
          reward
          apy
          poolName
          deposit
          depositDate
          depositReleaseDate
          rewardReleaseDate
          rewardValue
        }
      }
    }
  }
`;
