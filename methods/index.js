const { generate } = require("./generate");
const { getJWT } = require("./getJWT");
const { getAuthMessage } = require("./getAuthMessage");
const { recoverKey } = require("./recoverKey");
const { recoverShards } = require("./recoverShards");
const { saveShards } = require("./saveShards");
const { shardKey } = require("./shardKey");
const { revokeAccess } = require("./revokeAccess");
const { accessControl } = require("./accessControl");
const { shareToAddress } = require("./shareToAddress");

module.exports = {
  generate,
  getJWT,
  getAuthMessage,
  recoverShards,
  revokeAccess,
  recoverKey,
  saveShards,
  shardKey,
  accessControl,
  shareToAddress,
};
