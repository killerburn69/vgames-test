import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-as-default
import useOwnerOf from '../hooks/useOwnerOf'
import img from '../images/1bd78315b23189f7dad5437aeaccdb14.gif'

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 0px;
`
const SliceString = (string: any, num1: number, num2: number) => {
  const string1 = string?.slice(0, num1)
  const string2 = string?.slice(-num2)
  return `${string1}...${string2}`
}
const ItemList = ({ item, address }) => {
  const { data: tokenData } = useOwnerOf({
    tokenID: item,
  })
  return (
    <>
      {tokenData === address && (
        <GridItem>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src={img} alt="" width={48} height={48} />
            <h1>Michilin 3xplorer #{item}</h1>
          </div>
          <div>
            <p>0.125BNB</p>
          </div>
          <div>
            <p>0.125BSC</p>
          </div>
          <div>
            <p>0.034BSC</p>
          </div>
          <div>
            <p>#{item}</p>
          </div>
          {address && (
            <div>
              <p>{SliceString(tokenData, 4, 4)}</p>
            </div>
          )}
          <div>
            <p>19m ago</p>
          </div>
        </GridItem>
      )}
    </>
  )
}

export default ItemList
