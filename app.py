# import os
# from ocean_lib.config import Config
# from ocean_lib.config_provider import ConfigProvider
# from ocean_lib.ocean.util import get_web3_connection_provider
# from ocean_lib.web3_internal.web3_provider import Web3Provider
# from ocean_lib.web3_internal.contract_handler import ContractHandler

# #configure the components
# config = Config(os.getenv('CONFIG_FILE'))
# ConfigProvider.set_config(config)
# Web3Provider.init_web3(provider=get_web3_connection_provider(config.network_url))
# ContractHandler.set_artifacts_path(config.artifacts_path)

# from ocean_lib.ocean.ocean import Ocean
# ocean = Ocean()

# #create wallet, leveraging ocean.web3
# from ocean_lib.web3_internal.wallet import Wallet
# wallet = Wallet(ocean.web3, private_key=os.getenv('MY_TEST_KEY')) #or use keyfile approach

# datatoken = ocean.create_data_token('Dataset name', 'dtsymbol', from_wallet=wallet)
# print(f'created new datatoken with address {datatoken.address}')

print (2+2)
