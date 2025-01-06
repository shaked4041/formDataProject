const express = require('express')
const userService = require('../BL/user.service')
const router = express.Router()

//create user

router.post('/', (req, res) => {
   try {
      const result = userService.createUser(req.body)
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})


//get all users

router.get('/', (req, res) => {
   try {
      const result = userService.getAllUsers()
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})

// TODO
// get one user by :id in the params
// call the userService.readOneUser and send the id
// return one user

router.get('/:id', (req, res) => {
   try {
      const result = userService.readOneUser(req.params.id);
      res.send(result);
   } catch (error) {
      console.log(error);
      res.status(error.status || 500).send(error?.msg || 'Error occurred');
   }
});


//update user by id

// TODO
// get update user by :id in the params
// and get the update fields from the req.body
// call the userService.updateUser and send the id and body
// return the updated user

router.put('/:id', (req, res) => {
   try {
      const { params: { id }, body } = req
      const result = userService.updateUser(id, body)
      if (result === null) {
         throw { status: 404, msg: 'User not found' };
      }
      res.send(result);
   } catch (error) {
      console.log(error);
      res.status(error.status || 500).send(error?.msg || 'something went wrong')
   }
})

// router.put('/new', (req, res) => {
//    try {
//       const result = true
//       res.send(result)
//    } catch (error) {
//       res.status(500).send(error?.message || error || 'something went wrong')
//    }
// })

// TODO
// get delete user by :id in the params
// call the userService.deleteOneUser and send the id
// return ok

router.delete('/:id', (req, res) => {
   try{
      const { params: { id }} = req
      userService.deleteOneUser(id)
      res.send('ok')
      console.log('deleted');
   }catch(error){
      console.log(error);
      res.status(error.status || 500).send(error?.msg || 'something went wrong')
   }
})




module.exports = router
