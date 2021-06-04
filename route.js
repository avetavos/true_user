const express = require('express')
const router = express.Router()
const User = require('./model')
const dayjs = require('dayjs')

router.get('/', async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ users });
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.status(200).json({
    user
  });
})

router.post('/', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    create_by: req.body.create_by,
    create_date: dayjs().unix(),
    last_update_date: dayjs().unix()
  });
  await newUser.save()
  res.status(201).json({
    user: newUser
  })
})

router.put('/:id', async (req, res) => {
  const { username, first_name, last_name, last_update_by } = req.body;
  const lastUpdateDate = dayjs().unix();
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      first_name,
      last_name,
      last_update_by,
      last_update_date: lastUpdateDate
    }
  );
  return res.status(200).json({user});
})

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: `Deleted user ${req.params.id} successfully`,
  });
})

module.exports = router