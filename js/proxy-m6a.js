let web3M6A = new web3js.myweb3(window.ethereum);
let walletAddressM6A;
let NetworkIdM6A;

const contarctAddressM6A = "0x0e780e0fcb0eC5E9C58385D2037B0b90e1640636";
const contarctABIM6A = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "_M615Details",
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
    "name": "_M630Details",
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
    "name": "_PlaceInM615Tree",
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
    "name": "_PlaceInM630Tree",
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

let sttcontractM6A = new web3M6A.eth.Contract(contarctABIM6A, contarctAddressM6A);

const loadweb3M6A = async () => {
    try {
        web3M6A = new web3js.myweb3(window.ethereum);
        sttcontractM6A = new web3M6A.eth.Contract(contarctABIM6A, contarctAddressM6A);
        let a = await ethereum.enable();
        await web3M6A.eth.net.getId().then(function(result, err) {
            if (result == 137) {
                NetworkIdM6A = result;
                walletAddressM6A = web3M6A.utils.toChecksumAddress(a[0]);
                return (walletAddressM6A);
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

const BindUserM6A15 = async () => {
    if (walletAddressM6A != undefined) {
        await sttcontractM6A.methods.generate_report(0, walletAddressM6A, 0).call((err, res) => {
            $('#userm61stpoolrebirthcount').html(res[0]);
        });
    }
}

const BindUserM6A30 = async () => {
    if (walletAddressM6A != undefined) {
        await sttcontractM6A.methods.generate_report(1, walletAddressM6A, 0).call((err, res) => {
            $('#userm62ndpoolrebirthcount').html(res[0]);
        });
    }
}

$(document).ready(function() {
    loadweb3M6A();
    var IsFlag = 0;
    setInterval(function() {
        if (walletAddressM6A != undefined && IsFlag == 0) {
            console.log('Proxy A');
            BindUserM6A15();
            BindUserM6A30();
            IsFlag = 1;
        }
    }, 3000);
});