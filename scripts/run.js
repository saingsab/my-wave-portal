
const main = async () => {
    const [ownser, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", ownser.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTrx = await waveContract.wave();
    await waveTrx.wait();

    waveCount = await waveContract.getTotalWaves();

    waaveTrx = await waveContract.connect(randomPerson).wave();
    await waveTrx.wait();

    waveCount = await waveContract.getTotalWaves();
  };

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();