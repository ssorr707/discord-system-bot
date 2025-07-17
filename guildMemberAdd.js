module.exports = (client) => {
  client.on('guildMemberAdd', member => {
    const ch = member.guild.systemChannel;
    if (ch) ch.send(`🎉 أهلا بك يا ${member.user.username} في السيرفر!`);
  });
};
