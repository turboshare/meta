let web3M6 = new web3js.myweb3(window.ethereum);
let walletAddressM6;
let NetworkIdM6;

const contarctAddressM6 = "0xF35a282c87Fdc8ECb9dcC9784931358F2087bC44";
const contarctABIM6 = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "_SystemM6Details",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalM615Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM630Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM660Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6120Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6240Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6480Bonus",
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
    "name": "_UserM6Bonus",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "usedBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "availableBonus",
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
    "name": "_UserM6BonusDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalM615Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM630Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM660Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6120Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6240Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6480Bonus",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "packageId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "packageAmount",
        "type": "uint256"
    }],
    "name": "_updatePackage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "_verifyInMatic",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "payable",
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
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "IsFreshId",
        "type": "uint256"
    }],
    "name": "creditM6Income",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "m6per",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "packagePrice",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
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
    }, {
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }],
    "name": "placeInM6",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "ref_bonuses",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalM6Income",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "M6ProxyA",
        "type": "address"
    }],
    "name": "update_M6ProxyA",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "M6ProxyB",
        "type": "address"
    }],
    "name": "update_M6ProxyB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "M6ProxyC",
        "type": "address"
    }],
    "name": "update_M6ProxyC",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];


let sttcontractM6 = new web3M6.eth.Contract(contarctABIM6, contarctAddressM6);

const loadweb3M6 = async () => {
    try {
        web3M6 = new web3js.myweb3(window.ethereum);
        sttcontractM6 = new web3M6.eth.Contract(contarctABIM6, contarctAddressM6);
        let a = await ethereum.enable();
        await web3M6.eth.net.getId().then(function(result, err) {
            if (result == 137) {
                NetworkIdM6 = result;
                walletAddressM6 = web3M6.utils.toChecksumAddress(a[0]);
                BindUserM6Bonus();
                UserM6Bonus();
                return (walletAddressM6);
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

const BindUserM6Bonus = async () => {
    if (walletAddressM6 != undefined) {
        await sttcontractM6.methods._UserM6BonusDetails(walletAddressM6).call((err, res) => {
            $('#userm61stpoolbonus').html(parseFloat(web3.utils.fromWei(res[0], "ether")).toFixed(8) + ' MATIC');
            $('#userm62ndpoolbonus').html(parseFloat(web3.utils.fromWei(res[1], "ether")).toFixed(8) + ' MATIC');
            $('#userm63rdpoolbonus').html(parseFloat(web3.utils.fromWei(res[2], "ether")).toFixed(8) + ' MATIC');
            $('#userm64thpoolbonus').html(parseFloat(web3.utils.fromWei(res[3], "ether")).toFixed(8) + ' MATIC');
            $('#userm65thpoolbonus').html(parseFloat(web3.utils.fromWei(res[4], "ether")).toFixed(8) + ' MATIC');
            $('#userm66thpoolbonus').html(parseFloat(web3.utils.fromWei(res[5], "ether")).toFixed(8) + ' MATIC');
        });
    }
}

const UserM6Bonus = async () => {
    if (walletAddressM6 != undefined) {
        await sttcontractM6.methods._UserM6Bonus(walletAddressM6).call((err, res) => {
            $('#yourspanm6bonus').html(parseFloat(web3.utils.fromWei(res[0], "ether")).toFixed(8) + ' MATIC');
        });
    }
}

$(document).ready(function() {
    setInterval(function() {

    }, 12000);
});