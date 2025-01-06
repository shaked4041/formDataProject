const usersController = require('../DL/user.controller')

const getAllUsers = () => {
   return usersController.findAll()
}

const createUser = (data) => {
   console.log(data);
   const users = usersController.findAll()
   if (Object.keys(data).length !== 4) throw "missing data";
   if (
     Object.keys(data).filter(
       (key) =>
         !(
           key === "password" ||
           key === "email" ||
           key === "lastName" ||
           key === "firstName"
         )
     ).length > 0
   )
     throw "key did not exist";
   if (users.find((u) => u.email === data.email)) throw "user already exists";
   const newUser = { ...data, id: generateId(data.email) };
   return usersController.create(newUser);

};

const generateId = () => {
   return Date.now() + Math.floor(Math.random() * 10000000000)
}

const readOneUser = (id) => {
   if (!id) throw 'user not exist'

   const user = usersController.readOne(id); 
   if (user) {
      return user;
   }
   throw 'User not found';
}

const deleteOneUser = (id) => {
const result = usersController.deleteOne(id);
if (result === null) {
   throw { status: 404, msg: 'User not found' };
}
return result;
};

const updateUser = (id, data) => {
   
   return usersController.updateOne(id, data)
}


module.exports = {getAllUsers, createUser, updateUser, readOneUser, deleteOneUser}