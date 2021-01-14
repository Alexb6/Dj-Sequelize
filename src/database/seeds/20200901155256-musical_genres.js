const { v4: uuidv4 } = require('uuid');
const now = new Date();

module.exports = [
	{ id: uuidv4(), name: "Open Format", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "House", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "Deep House", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "Electro", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "Funk", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "Hip Hop", created_at: now, updated_at: now },
	{ id: uuidv4(), name: "Rap", created_at: now, updated_at: now },
];
