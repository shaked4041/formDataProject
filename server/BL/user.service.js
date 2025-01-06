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

// TODO
// get one user by id
// check if there is id (and throw error if not)
// call the userController.readOne and send the id
// check if it's a userController return or null | undefined (and throw error)
// return one user


const readOneUser = (id) => {
   if (!id) throw 'user not exist'

   const user = usersController.readOne(id); // Assuming usersController.readOne returns the user
   if (user) {
      return user;
   }
   throw 'User not found';
}



// TODO
// get delete user by id
// check if there is id (and throw error if not)
// call the userController.deleteOne and send the id
// check if it's a userController return or null | undefined (and throw error)
// return ok


const deleteOneUser = (id) => {
const result = usersController.deleteOne(id);
if (result === null) {
   throw { status: 404, msg: 'User not found' };
}
return result;
};

// TODO
// get update user by id and data
// check if there is id and data (and throw error if not)
// call the userController.updateOne and send the id and body
// check if it's a userController return or null | undefined (and throw error)
// return the updated user


const updateUser = (id, data) => {
   
   return usersController.updateOne(id, data)
}


// TODO
// add here the created functions
module.exports = {getAllUsers, createUser, updateUser, readOneUser, deleteOneUser}