const mongoose = require('mongoose');

const GuildSettingsSchema = new mongoose.Schema({
    guild: String,
    welcome_channel_id: String,
});

module.exports = mongoose.model("GuildSettings", GuildSettingsSchema);