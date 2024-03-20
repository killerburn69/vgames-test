import React from 'react'
import MyInventoryPageLayout from 'views/MyInventory'
import Overview from 'views/MyInventory/Overview'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = MyInventoryPageLayout
InfoPage.chains = [] // set all

export default InfoPage
