# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
#### Verify Contract on Hardhat
 - Install @nomiclabs/hardhat-etherscan
 - Add in plugin in hardhat.config.js 
    ```etherscan: {
        apiKey: "XXXXX"
    } ```
- ``` npx hardhat verify 0xe69d062De423D8c07E5FA9f044a38f9bFB2Ce804 --network rinkeby ```