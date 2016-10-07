#!/usr/bin/env node
'use strict'

const axios = require('axios');
const channel = process.argv[2];
const stdin = process.openStdin();
const slackHook = '';

let data = '';

stdin.on('data', (chunk) => {
  axios.post(slackHook, {
    channel: channel,
    username: 'Pipe Bot',
    text: chunk.toString('utf8'),
    icon_emoji: ':printer:',
  });
  data += chunk;
});

stdin.on('end', () => {
  console.log('PIPE COMPLETE');
});
