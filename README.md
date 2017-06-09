# pipe-to-slack

Pipe any command line output to a slack channel or private message

## Installation

```
npm install -g pipe-to-slack
```

## Configuration

You'll need to create a `.p2s` file in your home directory (e.g. `~/.p2s`). In here you'll need to add your Slack webhook:

```
webHook=https://slackWebhookUrl
defaultChannel=#random
username="Pipe Bot"
```
*defaultChannel and username are optional*

## Usage

All you need to do is pipe the command into `p2s`.

```
<command> | p2s <channel or @person>
```
*the channel/person argument is optional*

For example:

```
cat someFile.txt | p2s "#SomeChannelInSlack"
```

## Why?

My use case is when working with a distributed team it's nice sometimes to demonstrate some particular output from a command. e.g.

```
npm test | p2s "@myMateDave"
```
