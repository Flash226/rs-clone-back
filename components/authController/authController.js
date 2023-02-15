const User = require('../../models/user');
const Role = require('../../models/role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('../../configJwt');
const user = require('../../models/user');
const { json } = require('express');

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  };
  return jwt.sign(payload, secret, {expiresIn: "24h"});
};

class AuthController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const candidate = await User.findOne({username});
      if (candidate) {
        return res.status(400).json({message: `A user with the same name already exists`});
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({value: 'user'});
      const user = new User({username, password: hashPassword, roles: [userRole.value]});
      await user.save();
      return res.json({message: `User successfully registered`});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Registration error`});
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({username});
      if (!user) {
        return res.status(400).json({message: `User ${username} not found`});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({message: `Password not valid`});
      }
      const userId = user._id;
      const token = generateAccessToken(user._id, user.roles);
      return res.json({token, userId});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Login error`});
    }
  }

  checkAuth(req, res) {
    try {
      return res.json(true);
    } catch (e) {
      console.log(e)
      return res.json('Something error!');
    }
  }

}

module.exports = new AuthController();
