export default {
  ADA: {
    symbol: 'ADA',
    name: 'Cardano',
    addressLookup: 'https://adascan.net/address/[[address]]',
    explorer: 'https://adascan.net/transaction/[[txHash]]',
    fixRateEnabled: true
  },
  BCD: {
    symbol: 'BCD',
    name: 'Bitcoin Diamond',
    addressLookup:
      'http://explorer.btcd.io/#/address?loading=true&address=[[address]]',
    explorer: 'http://explorer.btcd.io/#/TX?loading=true&TX=[[txHash]]',
    fixRateEnabled: true
  },
  BCH: {
    symbol: 'BCH',
    name: 'Bitcoin Cash ABC',
    addressLookup: 'https://explorer.bitcoin.com/bch/address/[[address]]',
    explorer: 'https://explorer.bitcoin.com/bch/tx/[[txHash]]',
    fixRateEnabled: true
  },
  BSV: {
    symbol: 'BSV',
    name: 'Bitcoin Cash SV',
    addressLookup: 'https://bchsvexplorer.com/address/[[address]]',
    explorer: 'https://bchsvexplorer.com/tx/[[txHash]]',
    fixRateEnabled: true
  },
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    addressLookup: 'https://www.blockchain.com/btc/address/[[address]]',
    explorer: 'https://www.blockchain.com/btc/tx/[[txHash]]',
    fixRateEnabled: true
  },
  BTG: {
    symbol: 'BTG',
    name: 'Bitcoin Gold',
    addressLookup:
      'https://explorer.bitcoingold.org/insight/address/[[address]]',
    explorer: 'https://explorer.bitcoingold.org/insight/tx/[[txHash]]',
    fixRateEnabled: true
  },
  BTT: {
    symbol: 'BTT',
    name: 'BitTorrent',
    addressLookup: 'https://tronscan.org/#/address/[[address]]/token-balances',
    explorer: 'https://tronscan.org/#/transaction/[[txHash]]',
    fixRateEnabled: true
  },
  DASH: {
    symbol: 'DASH',
    name: 'Dash',
    addressLookup:
      'https://chainz.cryptoid.info/dash/address.dws?[[address]].htm.htm',
    explorer: 'https://chainz.cryptoid.info/dash/tx.dws?[[txHash]].htm',
    fixRateEnabled: true
  },
  DCR: {
    symbol: 'DCR',
    name: 'Decred',
    addressLookup: 'https://mainnet.decred.org/address/[[address]]',
    explorer: 'https://mainnet.decred.org/tx/[[txHash]]',
    fixRateEnabled: true
  },
  DGB: {
    symbol: 'DGB',
    name: 'DigiByte',
    addressLookup:
      'https://chainz.cryptoid.info/dgb/address.dws?[[address]].htm',
    explorer: 'https://chainz.cryptoid.info/dgb/tx.dws?[[txHash]].htm',
    fixRateEnabled: true
  },
  DOGE: {
    symbol: 'DOGE',
    name: 'Dogecoin',
    addressLookup: 'https://dogechain.info/address/[[address]]',
    explorer: 'https://dogechain.info/tx/[[txHash]]',
    fixRateEnabled: true
  },
  ETC: {
    symbol: 'ETC',
    name: 'Ethereum Classic',
    addressLookup: 'http://gastracker.io/addr/[[address]]',
    explorer: 'http://gastracker.io/tx/[[txHash]]',
    fixRateEnabled: true
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    addressLookup:
      'https://changelly.enjinx.io/eth/address/[[address]]/transactions',
    explorer: 'https://changelly.enjinx.io/eth/transaction/[[txHash]]',
    fixRateEnabled: true
  },
  GAS: {
    symbol: 'GAS',
    name: 'Gas',
    addressLookup: 'https://neotracker.io/address/[[address]]',
    explorer: 'https://neotracker.io/tx/[[txHash]]',
    fixRateEnabled: true
  },
  KMD: {
    symbol: 'KMD',
    name: 'Komodo',
    addressLookup: 'https://kmdexplorer.io/address/[[address]]',
    explorer: 'https://kmdexplorer.io/tx/[[txHash]]',
    fixRateEnabled: false
  },
  LSK: {
    symbol: 'LSK',
    name: 'Lisk',
    addressLookup: 'https://explorer.lisk.io/address/[[address]]',
    explorer: 'https://explorer.lisk.io/tx/[[txHash]]',
    fixRateEnabled: true
  },
  LTC: {
    symbol: 'LTC',
    name: 'Litecoin',
    addressLookup: 'http://explorer.litecoin.net/address/[[address]]',
    explorer: 'http://explorer.litecoin.net/tx/[[txHash]]',
    fixRateEnabled: true
  },
  MAID: {
    symbol: 'MAID',
    name: 'MaidSafeCoin',
    addressLookup:
      'https://omniexplorer.info/lookupadd.aspx?address=[[address]]',
    explorer: 'https://omniexplorer.info/lookuptx.aspx?txid=[[txHash]]',
    fixRateEnabled: true
  },
  NEBL: {
    symbol: 'NEBL',
    name: 'Neblio (NEBL)',
    addressLookup: 'https://explorer.nebl.io/address/[[address]]',
    explorer: 'https://explorer.nebl.io/tx/[[txHash]]',
    fixRateEnabled: false
  },
  NEO: {
    symbol: 'NEO',
    name: 'Neo',
    addressLookup: 'https://neotracker.io/address/[[address]]',
    explorer: 'https://neotracker.io/tx/[[txHash]]',
    fixRateEnabled: true
  },
  NIM: {
    symbol: 'NIM',
    name: 'Nimiq',
    addressLookup: 'https://nimiq.watch/#[[address]]',
    explorer: 'https://nimiq.watch/#[[txHash]]',
    fixRateEnabled: false
  },
  ONT: {
    symbol: 'ONT',
    name: 'Ontology',
    addressLookup: 'https://explorer.ont.io/address/[[address]]/10/1',
    explorer: 'https://explorer.ont.io/transaction/[[txHash]]',
    fixRateEnabled: true
  },
  PPC: {
    symbol: 'PPC',
    name: 'Peercoin',
    addressLookup: 'https://explorer.peercoin.net/address/[[address]]',
    explorer: 'https://explorer.peercoin.net/tx/[[txHash]]',
    fixRateEnabled: false
  },
  PROC: {
    symbol: 'PROC',
    name: 'ProCurrency',
    addressLookup: 'https://procsight.com/address/[[address]]',
    explorer: 'https://procsight.com/tx/[[txHash]]',
    fixRateEnabled: false
  },
  QTUM: {
    symbol: 'QTUM',
    name: 'Qtum Ignition',
    addressLookup: 'https://explorer.qtum.org/address/[[address]]',
    explorer: 'https://explorer.qtum.org/tx/[[txHash]]',
    fixRateEnabled: true
  },
  SMART: {
    symbol: 'SMART',
    name: 'SmartCash',
    addressLookup: 'https://explorer.smartcash.cc/address/[[address]]',
    explorer: 'https://explorer.smartcash.cc/tx/[[txHash]]',
    fixRateEnabled: false
  },
  STRAT: {
    symbol: 'STRAT',
    name: 'Stratis',
    addressLookup: 'https://chainz.cryptoid.info/strat/address.dws?[[address]]',
    explorer: 'https://chainz.cryptoid.info/strat/tx.dws?[[txHash]]',
    fixRateEnabled: true
  },
  TRX: {
    symbol: 'TRX',
    name: 'Tron',
    addressLookup: 'https://tronscan.org/#/address/[[address]]',
    explorer: 'https://tronscan.org/#/transaction/[[txHash]]',
    fixRateEnabled: true
  },
  USDT: {
    symbol: 'USDT',
    name: 'Tether USD',
    addressLookup:
      'https://omniexplorer.info/lookupadd.aspx?address=[[address]]',
    explorer: 'https://omniexplorer.info/lookuptx.aspx?txid=[[txHash]]',
    fixRateEnabled: true
  },
  VET: {
    symbol: 'VET',
    name: 'VeChainThor',
    addressLookup: 'https://explorer.vtho.net/#/accounts/[[address]]',
    explorer: 'https://explorer.vtho.net/#/transactions/[[txHash]]',
    fixRateEnabled: false
  },
  WAVES: {
    symbol: 'WAVES',
    name: 'Waves',
    addressLookup: 'http://wavesexplorer.com/address/[[address]]',
    explorer: 'http://wavesexplorer.com/tx/[[txHash]]',
    fixRateEnabled: true
  },
  XRC: {
    symbol: 'XRC',
    name: 'Bitcoin Rhodium',
    addressLookup: 'https://explorer.bitcoinrh.org/xrc/Address/[[address]]',
    explorer: 'https://explorer.bitcoinrh.org/xrc/tx/[[txHash]]',
    fixRateEnabled: false
  },
  XVG: {
    symbol: 'XVG',
    name: 'Verge',
    addressLookup: 'https://verge-blockchain.info/address/[[address]]',
    explorer: 'https://verge-blockchain.info/tx/[[txHash]]',
    fixRateEnabled: true
  },
  XZC: {
    symbol: 'XZC',
    name: 'ZCoin',
    addressLookup: 'https://explorer.zcoin.io/address/[[address]]',
    explorer: 'https://explorer.zcoin.io/tx/[[txHash]]',
    fixRateEnabled: true
  },
  ZEC: {
    symbol: 'ZEC',
    name: 'Zcash',
    addressLookup: 'https://explorer.zcha.in/accounts/[[address]]',
    explorer: 'https://explorer.zcha.in/transactions/[[txHash]]',
    fixRateEnabled: true
  },
  ZEN: {
    symbol: 'ZEN',
    name: 'Horizen',
    addressLookup: 'https://explorer.zensystem.io/address/[[address]]',
    explorer: 'https://explorer.zensystem.io/tx/[[txHash]]',
    fixRateEnabled: true
  }
};
