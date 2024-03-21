const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Te dice lo que hace el bot'),
	async execute(interaction) {
		await interaction.reply(`Mira boludito el bot todavia no anda, no preguntes pavadas.`);
	},
};