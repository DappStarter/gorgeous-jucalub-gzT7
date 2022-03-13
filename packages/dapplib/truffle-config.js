require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember exchange gloom arena bubble shell'; 
let testAccounts = [
"0x3450c79c5a9ccfc8c545277a2c51c25473d5dacb0f896fb31b18479f0293be60",
"0x931a3cb7be5ae77fcbfdd61066e8421a00790e613886f649b064bc096e3b3d08",
"0x91ae65936edf78c930fa37f60be2a5a05be615323d8a0637882ba766c5ceb542",
"0x420874a15a707538a702ec50646cf79ef8983218f118d0c7ee1b11da471f0d8d",
"0x697e5be1dfc41b109435e5a3578f0f33ec55dbd1d809fa47e0b2300832419328",
"0xbc42a08ad61c6c1b14ab36a9f1ff69c5b24db8e2b60d1ec6ef72e687c7b6b496",
"0xa603f0f99ecbf92fe66eaf08579235aa863d2df2be2176b7d5f22f8df21f7a87",
"0xc5770565cfb11aee2de8c78a33a2046a8f0c20f95cec70e03b9af51744a165e6",
"0xe8abea7e43c07e97d3d62cc30eb7afec44430bcef8bb376d46d2bab532926d51",
"0xf1575cd1e85cf931818edae768c950950d81aaed5705eada68633480e86a699b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

