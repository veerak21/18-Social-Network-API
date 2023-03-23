const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/developersApplications",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
