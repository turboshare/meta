let web3 = new web3js.myweb3(window.ethereum);
let walletAddress;
let NetworkId;

const contarctAddress = "0x84F4f66169305B624ef3179b7423E4d9B2297b8d";
const contarctABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }],
    "name": "Joining",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Upgrade",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "VerifyId",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "Withdrawn",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "Up120LevelCount",
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
    "name": "Up120List",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "Up15LevelCount",
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
    "name": "Up15List",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "Up240LevelCount",
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
    "name": "Up240List",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "Up30LevelCount",
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
    "name": "Up30List",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "Up480LevelCount",
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
    "name": "Up480List",
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
        "name": "",
        "type": "uint256"
    }],
    "name": "Up60LevelCount",
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
    "name": "Up60List",
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
    }],
    "name": "_IsUserExists",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }],
    "name": "_Joining",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "_SystemPackageId",
    "outputs": [{
        "internalType": "uint256",
        "name": "total15Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "total30Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "total60Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "total120Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "total240Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "total480Id",
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
    "name": "_SystemUpBonusDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalUp15Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp30Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp60Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp120Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp240Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp480Bonus",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }],
    "name": "_Upgrade",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "_UserAffiliateDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "selfInvestment",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "sponsor",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "joiningDateTime",
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
    "name": "_UserIncomeDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalReferralBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalM6Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUPBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "creditedBonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "usedWallet",
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
    "name": "_UserUPBonusDetails",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalUp15Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp30Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp60Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp120Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp240Bonus",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp480Bonus",
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
    "name": "_UserUPCycleCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalUp15Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp30Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp60Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp120Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp240Id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp480Id",
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
    "name": "_UserUPLevelCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "totalUp15",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp30",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp60",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp120",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp240",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalUp480",
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
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "allpackage",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "package",
        "type": "uint256"
    }],
    "name": "_verifyId",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "_verifyM6ContractMatic",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "_verifyMatic",
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
    }],
    "name": "getSponsorId",
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
    }],
    "name": "getUpQualifierList",
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
    }],
    "name": "getUserId",
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
        "name": "_user",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_level",
        "type": "uint256"
    }],
    "name": "level_downline",
    "outputs": [{
        "internalType": "uint256",
        "name": "_noOfUser",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_investment",
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
    "inputs": [],
    "name": "referralIncomePer",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalNumberofUsers",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalPackage",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalPackagePurchased",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalReferralIncome",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalUpIncome",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "universalpoolper",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "upWidth",
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
    "name": "userIdToAddress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}];

let sttcontract = new web3.eth.Contract(contarctABI, contarctAddress);

const loadweb3 = async () => {
    try {
        web3 = new web3js.myweb3(window.ethereum);
        sttcontract = new web3.eth.Contract(contarctABI, contarctAddress);
        let a = await ethereum.enable();
        await web3.eth.net.getId().then(function(result, err) {
            if (result == 137) {
                NetworkId = result;
                walletAddress = web3.utils.toChecksumAddress(a[0]);
                LoadWalletBalance();
                GetUserIncomeSummary();
                GetReferralList(0);
                $('#spancompletewalletaddress').html(walletAddress);
                $('#refaddress').val('https://app.metaomatic.io?ref=' + walletAddress + '');
                BindUserM6Bonus();
                BindUserUPRebirth();
                BindUserUPBonus();
                GetReferralLink();
                GetUserAffiliateDetails();
                return (walletAddress);
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

const connectwallet = async () => {
    if (walletAddress == undefined) {
        console.log('M6 Contract Loading');
        await loadweb3M6();
        console.log('M6 Contract Loaded');
        console.log('Affiliate Contract Loading');
        await loadweb3();
        console.log('Affiliate Contract Loaded');
    }
    if (walletAddress == undefined) {
        alert("Alert ! We only support Polygon Network right now. Please switch to Polygon Network and Connect.");
        return false;
    }
}

const LoadWalletBalance = async () => {
    if (walletAddress == undefined) {
        $('#spanmaticbalance').html('0.0000');
        $('#spanavailablematic').html('0.00000000');
        $('#spanwalletaddress').html('Connect Wallet');
    } else {
        var Balance = '';
        web3.eth.getBalance(walletAddress, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                Balance = web3.utils.fromWei(result, "ether");
                $('#spanmaticbalance').html('' + parseFloat(Balance).toFixed(2));
                $('#spanavailablematic').html('' + parseFloat(Balance).toFixed(8) + ' MATIC');
                $('#spanwalletaddress').html(walletAddress.slice(0, 4) + '*****' + walletAddress.substr(walletAddress.length - 4));
            }
        });
    }
}

function ViewNow() {
    window.location.href = "https://app.metaomatic.io/view.html?ref=" + $('#txtviewuserid').val();
}

const JoinNow = async (PackageInput) => {
    if (walletAddress == undefined) {
        alert("Alert ! We only support Polygon Network right now. Please switch to Polygon Network and Connect !");
        return false;
    }
    let maticval = PackageInput;
    maticval = Number(maticval) * 1e18;
    let refferedby = document.getElementById('refferedby').value;
    if (refferedby === "") {
        alert("Enter Referral Address.");
        return false;
    }
    sttcontract.methods._Joining(refferedby).send({
        from: walletAddress,
        value: maticval
    }, (err, res) => {
        if (!err) {
            console.log('Success Section =' + res);
        } else {
            console.log('Error Section = ' + err);
        }
    });
}

const UpgradeNow = async (Package, PackageInput) => {
    if (walletAddress == undefined) {
        alert("Alert ! We only support Polygon Network right now. Please switch to Polygon Network and Connect !");
        return false;
    }
    let maticval = PackageInput;
    maticval = Number(maticval) * 1e18;
    sttcontract.methods._Upgrade(Package).send({
        from: walletAddress,
        value: maticval
    }, (err, res) => {
        if (!err) {
            console.log('Success Section =' + res);
        } else {
            console.log('Error Section = ' + err);
        }
    });
}

const BindUserUPBonus = async () => {
    if (walletAddress != undefined) {
        await sttcontract.methods._UserUPBonusDetails(walletAddress).call((err, res) => {
            $('#userup1stpoolbonus').html(parseFloat(web3.utils.fromWei(res[0], "ether")).toFixed(8) + ' MATIC');
            $('#userup2ndpoolbonus').html(parseFloat(web3.utils.fromWei(res[1], "ether")).toFixed(8) + ' MATIC');
            $('#userup3rdpoolbonus').html(parseFloat(web3.utils.fromWei(res[2], "ether")).toFixed(8) + ' MATIC');
            $('#userup4thpoolbonus').html(parseFloat(web3.utils.fromWei(res[3], "ether")).toFixed(8) + ' MATIC');
            $('#userup5thpoolbonus').html(parseFloat(web3.utils.fromWei(res[4], "ether")).toFixed(8) + ' MATIC');
            $('#userup6thpoolbonus').html(parseFloat(web3.utils.fromWei(res[5], "ether")).toFixed(8) + ' MATIC');
        });
    }
}

const BindUserUPRebirth = async () => {
    if (walletAddress != undefined) {
        await sttcontract.methods._UserUPCycleCount(walletAddress).call((err, res) => {
            $('#userup1stpoolrebirthcount').html(res[0]);
            $('#userup2ndpoolrebirthcount').html(res[1]);
            $('#userup3rdpoolrebirthcount').html(res[2]);
            $('#userup4thpoolrebirthcount').html(res[3]);
            $('#userup5thpoolrebirthcount').html(res[4]);
            $('#userup6thpoolrebirthcount').html(res[5]);
        });
    }
}

const GetReferralList = async (level) => {
    if (walletAddress != undefined) {
        await sttcontract.methods.level_downline(walletAddress, level).call((err, res) => {
            if (res != undefined) {
                if (res[0] != undefined) {
                    if (parseInt(res[0]) > 0) {
                        $('#levelincomelist').append("<tr><td>" + (parseInt(level) + 1) + "</td><td>" + res[0] + "</td><td>" + parseFloat(web3.utils.fromWei(res[1], "ether")).toFixed(8) + " MATIC </td></tr>");
                        GetReferralList((parseInt(level) + 1));
                    }
                }
            }
        });
    }
}

const GetUserIncomeSummary = async () => {
    if (walletAddress != undefined) {
        await sttcontract.methods._UserIncomeDetails(walletAddress).call((err, res) => {
            $('#yourspanreferralbonus').html(parseFloat(web3.utils.fromWei(res[0], "ether")).toFixed(8) + ' MATIC');
            $('#yourspanuniversalpool').html(parseFloat(web3.utils.fromWei(res[2], "ether")).toFixed(8) + ' MATIC');
        });
    }
}

const GetUserAffiliateDetails = async () => {
    if (walletAddress != undefined) {
        await sttcontract.methods._UserAffiliateDetails(walletAddress).call((err, res) => {
            $('#spanuserid').html(res[0]);
            $('#spanmyinvestment').html(parseFloat(web3.utils.fromWei(res[1], "ether")).toFixed(8) + ' MATIC');
            $('#spanreferredby').html(res[2]);
            if (parseFloat(web3.utils.fromWei(res[1], "ether")).toFixed(8) > 0) {
                $('#referrrallinksection').css("display", "block");
                $('#invest').css("display", "none");
            }
        });
    }
}

window.onload = function() {
    function querySt(ji) {
        hu = window.location.search.substring(1);
        gy = hu.split("&");
        for (i = 0; i < gy.length; i++) {
            ft = gy[i].split("=");
            if (ft[0] == ji) {
                return ft[1];
            }
        }
    }
    var ref = querySt("ref");
    if (ref == null) {} else {
        $('#refferedby').val(ref);
        $('#refferedby').attr("readonly", "readonly");
    }
}

function GetReferralLink() {
    $('#spanreferralkey').html(document.getElementById('refaddress').value);
}

function copyToClipboard() {
    var text = document.getElementById('refaddress').value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        $('#spancopiedmessage').css("display", "block");
        $('#spancopiedmessage').html("Copied");
        setInterval(function() {
            $('#spancopiedmessage').html("");
            $('#spancopiedmessage').css("display", "none");
        }, 2000);

        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; //Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            $('#spancopiedmessage').css("display", "block");
            $('#spancopiedmessage').html("Copied");
            setInterval(function() {
                $('#spancopiedmessage').html("");
                $('#spancopiedmessage').css("display", "none");
            }, 2000);

            return document.execCommand("copy"); //Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function toFixedCustom(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += (new Array(e + 1)).join('0');
        }
    }
    return x;
}

$(document).ready(function() {
    connectwallet();
    //BindUserM6Bonus();
    //BindUserUPRebirth();
    //BindUserUPBonus();
    //GetReferralLink();
    //GetUserAffiliateDetails();
    setInterval(function() {
        LoadWalletBalance();
        GetUserIncomeSummary();
    }, 5000);
});