#!/usr/bin/env node
'use strict'

const axios = require('axios');
const stdin = process.openStdin();
const config = require('home-config').load('.p2s');
const channel = process.argv[2] || config.defaultChannel;
const webHook = config.webHook;

let data = Buffer.alloc(0);
if (channel && webHook) {
  stdin.on('data', (chunk) => {
    data = Buffer.concat([data, chunk]);
  });

  stdin.on('end', () => {
    axios.post(config.webHook, {
      channel: channel,
      username: config.username || 'Pipe Bot',
      text: data.toString('utf8'),
      icon_emoji: ':printer:',
    });
    console.log('PIPE TO SLACK COMPLETED');
  });
}
