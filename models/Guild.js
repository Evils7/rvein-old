const mongoose = require('mongoose')

const db = new mongoose.Schema({
  guild: { type: String },
  welcome: { channel: { type: String }, msg: { type: String } },
  log: { channel: { type: String } },
  tags: { type: [ { name: { type: String }, response: { type: String }, owner: { type: String }, nsfw: { type: Boolean } } ] },
  rr: { type: [ { role: { type: String }, msg: { type: String }, emoji: { type: String }, channel: { type: String } } ] },
  autoroles: { human: { type: String }, bot: { type: String }, all: { type: String } },
  prefix: { type: String },
  bl: { d: { type: String }, rea: { type: String } },
  suggestion: { channel: { type: String },
  s: { type: [ { ss: { msg: String, author: String, content: String, case: Number } } ] } },
  automod: { enabled: { type: Boolean }, antispam: { type: Boolean }, words: [] },
  moderations: { type: [ { kick: { user: String, reason: String, case_id: Number, mod: String } } ] },
  roles: { mute: String }
})

module.exports = mongoose.model('Guild', db)