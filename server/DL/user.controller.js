const fs = require('fs')
const isExist = fs.existsSync('./users.json')
if (!isExist) {
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

const readOne = (id) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const user = all.find(u => u.id == id);
   return user
}

const deleteOne = (id) => {
   const all = JSON.parse(fs.readFileSync('./users.json'))
   const updatedList = all.filter((u) => u.id != id);
   if (all.length === updatedList.length) {
      return null; 
   }
   fs.writeFileSync('./users.json', JSON.stringify(updatedList));
   return 'deleted';
}

const updateOne = (id, data) => {
   const all = JSON.parse(fs.readFileSync('./users.json'));
   const user = all.findIndex(u => u.id == id);
   if (user === -1) {
     return null; 
   }
   all[user] = { ...all[user], ...data };
   fs.writeFileSync('./users.json', JSON.stringify(all));
   return all[user];
 };


module.exports = { findAll, create, updateOne, deleteOne, readOne }


