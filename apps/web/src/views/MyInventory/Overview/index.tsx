import React, { useState } from 'react'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
import Item from '../components/Item'
import ItemList from '../components/ItemList'
// eslint-disable-next-line import/no-named-as-default
import useBalanceOf from '../hooks/useBalanceOf'

const FlexDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 50px;
`
const FlexButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 10px;
  gap: 10px;
  background: white;
  width: fit-content;
  margin: 0 auto;
  border-radius: 8px;
`
const ButtonChange = styled.button<{ isStatus?: boolean }>`
  background: ${(props) => (props.isStatus ? '#a881fc' : 'white')};
  outline: none;
  border: none;
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
`
const GridTitle = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 30px 0;
  border-bottom: 1px solid white;
`
const Overview = () => {
  const { address } = useAccount()
  const { data, isLoading, isSuccess } = useBalanceOf({
    owner: address,
  })
  const [status, setIsStatus] = useState(1)
  console.log('🚀 ~ Overview ~ data:', data)
  const onClickStatus = (id: number) => {
    setIsStatus(id)
  }
  return (
    <div>
      <FlexButton>
        <ButtonChange isStatus={status === 1} onClick={() => onClickStatus(1)}>
          Grid View
        </ButtonChange>
        <ButtonChange isStatus={status === 2} onClick={() => onClickStatus(2)}>
          List View
        </ButtonChange>
      </FlexButton>
      {status === 1 && (
        <FlexDiv>
          {Array.from({ length: 1000 }).map((_, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item key={index} item={index + 1} address={address} />
          ))}
        </FlexDiv>
      )}
      {status === 2 && (
        <div style={{ padding: '10px' }}>
          <GridTitle>
            <div />
            <div>Item</div>
            <div>Current Price</div>
            <div>Best Offer</div>
            <div>Last Sale</div>
            <div>Rarity</div>
            {address && <div>Owner</div>}
            <div>Time Listed</div>
          </GridTitle>
          <div style={{ padding: '20px 0px' }}>
            {Array.from({ length: 1000 }).map((_, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <ItemList key={index} item={index + 1} address={address} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Overview
