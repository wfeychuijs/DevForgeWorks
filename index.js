// Fund Alice and sponsor accounts
await aptos.fundAccount({
  accountAddress: aliceAddress,
  amount: ALICE_INITIAL_BALANCE,
});
await aptos.fundAccount({
  accountAddress: sponsorAddress,
  amount: SPONSOR_INITIAL_BALANCE,
});

// Show account balances
const aliceBalanceBefore = await aptos.getAccountCoinsData({
  accountAddress: aliceAddress,
});
const sponsorBalanceBefore = await aptos.getAccountCoinsData({
  accountAddress: sponsorAddress,
});
