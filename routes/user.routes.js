const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

/*route  
auth
allUser 
OneUser
updateUser
DeleteUser
Follow
UnFollow
*/
router.post('/register', authController.signUp);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unFollow);
module.exports = router;