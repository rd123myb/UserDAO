import { Ocean, Config, ConfigHelper } from '@oceanprotocol/lib'

const defaultConfig: Config = new ConfigHelper().getConfig(
  'rinkeby',
  'YOUR_INFURA_PROJECT_ID'
)

const config = {
  ...defaultConfig,
  metadataCacheUri: 'https://your-metadata-cache.com',
  providerUri: 'https://your-provider.com'
}

async function init() {
  const ocean = await Ocean.getInstance(config)
  return ocean
}