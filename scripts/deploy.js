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
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();