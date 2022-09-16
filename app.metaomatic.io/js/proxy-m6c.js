let web3M6C = new web3js.myweb3(window.ethereum);
let walletAddressM6C;
let NetworkIdM6C;

const contarctAddressM6C = "0x7138a15441620defc96b870141Aa73c56D10F78F";
const contarctABIM6C = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "_M6240Details",
    "outputs": [{
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "currentrecycle",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "_M6480Details",
    "outputs": [{
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "currentrecycle",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }],
    "name": "_PlaceInM6240Tree",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }],
    "name": "_PlaceInM6480Tree",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "_verifyOutMatic",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "contractOwner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "cycle",
        "type": "uint256"
    }],
    "name": "generate_report",
    "outputs": [{
        "internalType": "uint256",
        "name": "currentrecycle",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "parent",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "left",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "right",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "noofidinfirstlevel",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "noofidinsecondlevel",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "m6contract",
    "outputs": [{
        "internalType": "contract IPOLYCONTRACTM6",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maincontract",
    "outputs": [{
        "internalType": "contract IPOLYCONTRACTMAIN",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}];

let sttcontractM6C = new web3M6C.eth.Contract(contarctABIM6C, contarctAddressM6C);

const loadweb3M6C = async () => {
    try {
        web3M6C = new web3js.myweb3(window.ethereum);
        sttcontractM6C = new web3M6C.eth.Contract(contarctABIM6C, contarctAddressM6C);
        let a = await ethereum.enable();
        await web3M6C.eth.net.getId().then(function(result, err) {
            if (result == 137) {
                NetworkIdM6C = result;
                walletAddressM6C = web3M6C.utils.toChecksumAddress(a[0]);
                return (walletAddressM6C);
            } else {
                alert("Alert ! We only support Polygon Network right now. Please switch to Polygon Network and Connect !");
                return false;
            }
        });
    } catch (error) {
        if (error.code === 4001) {
            console.log('Please connect to MetaMask.')
        } else {
            console.error(error)
        }
    }
};

const BindUserM6A240 = async () => {
    if (walletAddressM6C != undefined) {
        await sttcontractM6C.methods.generate_report(4, walletAddressM6C, 0).call((err, res) => {
            $('#userm65thpoolrebirthcount').html(res[0]);
        });
    }
}

const BindUserM6A480 = async () => {
    if (walletAddressM6C != undefined) {
        await sttcontractM6C.methods.generate_report(5, walletAddressM6C, 0).call((err, res) => {
            $('#userm66thpoolrebirthcount').html(res[0]);
        });
    }
}

$(document).ready(function() {
    loadweb3M6C();
    var IsFlag = 0;
    setInterval(function() {
        if (walletAddressM6C != undefined && IsFlag == 0) {
            console.log('Proxy C');
            BindUserM6A240();
            BindUserM6A480();
            IsFlag = 1;
        }
    }, 3000);
});