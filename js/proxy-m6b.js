let web3M6B = new web3js.myweb3(window.ethereum);
let walletAddressM6B;
let NetworkIdM6B;

const contarctAddressM6B = "0x46A737fe3765D760e3E47c5FB9580F69fe5Bb8Cc";
const contarctABIM6B = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "_M6120Details",
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
    "name": "_M660Details",
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
    "name": "_PlaceInM6120Tree",
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
    "name": "_PlaceInM660Tree",
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

let sttcontractM6B = new web3M6B.eth.Contract(contarctABIM6B, contarctAddressM6B);

const loadweb3M6B = async () => {
    try {
        web3M6B = new web3js.myweb3(window.ethereum);
        sttcontractM6B = new web3M6B.eth.Contract(contarctABIM6B, contarctAddressM6B);
        let a = await ethereum.enable();
        await web3M6B.eth.net.getId().then(function(result, err) {
            if (result == 137) {
                NetworkIdM6B = result;
                walletAddressM6B = web3M6B.utils.toChecksumAddress(a[0]);
                return (walletAddressM6B);
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

const BindUserM6A60 = async () => {
    if (walletAddressM6B != undefined) {
        await sttcontractM6B.methods.generate_report(2, walletAddressM6B, 0).call((err, res) => {
            $('#userm63rdpoolrebirthcount').html(res[0]);
        });
    }
}

const BindUserM6A120 = async () => {
    if (walletAddressM6B != undefined) {
        await sttcontractM6B.methods.generate_report(3, walletAddressM6B, 0).call((err, res) => {
            $('#userm64thpoolrebirthcount').html(res[0]);
        });
    }
}

$(document).ready(function() {
    loadweb3M6B();
    var IsFlag = 0;
    setInterval(function() {
        if (walletAddressM6B != undefined && IsFlag == 0) {
            console.log('Proxy B');
            BindUserM6A60();
            BindUserM6A120();
            IsFlag = 1;
        }
    }, 3000);
});