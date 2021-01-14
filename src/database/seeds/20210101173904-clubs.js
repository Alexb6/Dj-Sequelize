const { v4: uuidv4 } = require('uuid');
const now = new Date();

module.exports = [
   {id: uuidv4(), name: "Le Cab'", created_at: now, updated_at: now },
   {id: uuidv4(), name: "Le Gibus", created_at: now, updated_at: now },
   {id: uuidv4(), name: "Bobino ", created_at: now, updated_at: now },
   {id: uuidv4(), name: "La Loco", created_at: now, updated_at: now },
   {id: uuidv4(), name: "Le Batofar", created_at: now, updated_at: now },
   {id: uuidv4(), name: "Madam", created_at: now, updated_at: now },
   {id: uuidv4(), name: "Red Light", created_at: now, updated_at: now }
]