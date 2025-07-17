let xp = {};
module.exports = {
  name: 'xp',
  description: '📊 كم نقاطك؟',
  async execute(interaction) {
    const id = interaction.user.id;
    xp[id] = (xp[id] || 0) + 5;
    interaction.reply(`📈 لديك ${xp[id]} نقطة!`);
  }
};
