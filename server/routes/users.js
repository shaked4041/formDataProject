const express = require('express')
const userService = require('../BL/user.service')
const router = express.Router()

router.post('/', (req, res) => {
   try {
      const result = userService.createUser(req.body)
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})

router.get('/', (req, res) => {
   try {
      const result = userService.getAllUsers()
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})

router.get('/:id', (req, res) => {
   try {
      const result = userService.readOneUser(req.params.id);
      res.send(result);
   } catch (error) {
      console.log(error);
      res.status(error.status || 500).send(error?.msg || 'Error occurred');
   }
});

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
