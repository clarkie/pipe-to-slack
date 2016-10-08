#!/usr/bin/env node
'use strict'

const axios = require('axios');
const stdin = process.openStdin();
const config = require('home-config').load('.p2s');
const channel = process.argv[2] || config.defaultChannel;
const webHook = config.webHook;

let data = '';
if (channel && webHook) {
  stdin.on('data', (chunk) => {
    axios.post(config.webHook, {
      channel: channel,
      username: 'Pipe Bot',
      text: chunk.toString('utf8'),
      icon_emoji: ':printer:',
    });
    data += chunk;
  });

  stdin.on('end', () => {
    console.log('PIPE TO SLACK COMPLETED');
  });
}
