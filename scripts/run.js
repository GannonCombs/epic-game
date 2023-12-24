const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(
        ["MrMeeseeks", "Beaker", "HTPHarold"],       // Names
        ["https://imgur.com/DmfUIdG.png", // Images
        "https://imgur.com/qEAZmVx.png",
        "https://imgur.com/LbDUJDk.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        //[1, 5, 2],                       // Critical damage values
        "Gary Busey", // Boss name
        "https://imgur.com/IuFIbkF.png", // Boss image
        1000, // Boss hp
        50 // Boss attack damage
      );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    console.log("Done1!");
  
    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done2!");
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done3!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log("Fail: " , error);
      process.exit(1);
    }
  };
  
  runMain();