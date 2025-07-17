module.exports = {
  name: 'لعبة',
  description: '🎮 لعبة بسيطة',
  async execute(interaction) {
    const random = Math.floor(Math.random() * 3);
    const result = ['حجر 🪨', 'ورقة 📜', 'مقص ✂️'][random];
    await interaction.reply(`🕹️ لعبتك هي: ${result}`);
  }
};
