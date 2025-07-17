module.exports = {
  name: 'تذكرة',
  description: 'فتح أو قفل تذكرة',
  async execute(interaction) {
    if (interaction.channel.name?.includes('تذكرة')) {
      await interaction.reply('✅ تم قفل التذكرة.');
      return await interaction.channel.delete();
    } else {
      const channel = await interaction.guild.channels.create({
        name: `🎫│تذكرة-${interaction.user.username}`,
        permissionOverwrites: [
          { id: interaction.guild.roles.everyone, deny: ['ViewChannel'] },
          { id: interaction.user.id, allow: ['ViewChannel', 'SendMessages'] }
        ]
      });
      await interaction.reply({ content: `✅ تم فتح التذكرة: ${channel}`, ephemeral: true });
    }
  }
};
