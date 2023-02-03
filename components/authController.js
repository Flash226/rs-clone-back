const User = require('../models/user')
const Role = require('../models/role')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')

class AuthController {
  async registration(req, res) {
    try {
      // validation
      // const errors = validationResult(res);
      // console.log(errors)
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({message:'Registration error', errors})
      // };

      const { username, password } = req.body;
      const candidate = await User.findOne({username});
      if (candidate) {
        return res.status(400).json({message: `A user with the same name already exists`});
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({value: 'user'});
      const user = new User({username, password: hashPassword, roles: [userRole.value]});
      await user.save();
      return res.json({message: `User successfully registered`})
    } catch (e) {
      console.log(e)
      res.status(400).json({message: `Registration error`})
    }
  }

  async login(req, res) {
    try {

    } catch (e) {
      console.log(e)
      res.status(400).json({message: `Login error`})  
    }
  }

  async getUsers(req, res) {
    try {
      // const userRole = new Role()
      // const adminRole = new Role({value: 'admin'})
      // await userRole.save();
      // await adminRole.save();
      res.json('server work')
    } catch (e) {

    }
  }
}

module.exports = new AuthController();