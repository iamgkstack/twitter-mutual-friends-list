const TwitterController = require('../controllers/TwitterController');

module.exports = [
  {
    version: 'v1',
    path: 'mutual/friends',
    method: 'get',
    action: TwitterController.getMutualFriends
  },
];