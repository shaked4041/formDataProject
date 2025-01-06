const fs = require('fs')
// info: check if exist file with that name return boolean 
const isExist = fs.existsSync('./users.json')
if (!isExist) {
   // info: create file , get a path as argument and data (after stringify) 
   fs.writeFileSync('./users.json', JSON.stringify([]))
}

const findAll = () => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   return all
}

const create = (newUser) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const newList = [...all, newUser]
   fs.writeFileSync('./users.json', JSON.stringify(newList))
   return newList
}

// TODO
// getOne
//  user by id
// read the file with fs
// run find
// return one user or null

const readOne = (id) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const user = all.find(u => u.id == id);
   return user
}


// TODO
// deleteOne
//  user by id
// read the file with fs
// delete one new users list
// if not found return null
// save with fs the new list
// return ok

const deleteOne = (id) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const updatedList = all.filter((u) => u.id != id);
   if (all.length === updatedList.length) {
      return null; 
   }
   fs.writeFileSync('./users.json', JSON.stringify(updatedList));
   return 'deleted';
}

// TODO
// updateOne
//  user by id and data
// read the file with fs
// if not found return null
// save with fs the new list
// return the updated user

const updateOne = (id, data) => {
   const all = JSON.parse(fs.readFileSync('./users.json'));
   const user = all.findIndex(u => u.id == id);
   if (user === -1) {
     return null; // User not found
   }
   all[user] = { ...all[user], ...data };
   fs.writeFileSync('./users.json', JSON.stringify(all));
   return all[user];
 };


module.exports = { findAll, create, updateOne, deleteOne, readOne }


// [{"firstName":"avi","id":1},{"firstName":"avi","id":20},{"firstName":"dfdf","id":4},{"firstName":"dfdfsdfsdf","id":5},{"firstName":"dfdfsdfsdf","id":6},{"firstName":"dfdfsdfsdf","id":7},{"firstName":"dfdfsdfsdf","id":8},{"firstName":"sdsdsd fdgfg","id":9},{"firstName":"shaked","id":1714690097463},{"firstName":"noam","id":1713074574405}]
