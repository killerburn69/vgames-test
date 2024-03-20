import MintPageLayout from 'views/Mint'
import Overview from 'views/Mint/Overview'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = MintPageLayout
InfoPage.chains = [] // set all

export default InfoPage
