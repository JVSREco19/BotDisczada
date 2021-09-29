
module.exports = {
	name: 'prune',
    aliases: ['cut'],
    category: 'utility',
    utilisation: '{prefix}prune [quantity]',
	async execute(client, message, args) {
		const amount = args[0]

		 if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity'|| args[0]<1 || args[0]>99) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);
		await message.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
		  message.channel.send(`${client.emotes.error} - There was an error trying to prune messages in this channel!`)
		});

		return message.channel.send(`Successfully pruned \`${amount}\` messages.`);
	},
};