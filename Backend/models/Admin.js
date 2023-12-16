const mongoose = require('mongoose');
const AdminSchema = new Mongoose.Schema({
    
      email: {
        type: 'string',
        required: true,
        unique: true
      },
      password: {
        type:'string',
        required: true,
        minLength: 6
      },
      addedMoives:[{
        type: 'mongoose.Types.ObjectId',
        ref:'Moives'
      }]
});
const admin = mongoose.model('Admin', AdminSchema)
module.Schema=admin;