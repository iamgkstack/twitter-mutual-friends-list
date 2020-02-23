/**
 * HealthCheckController
 *
 * @description :: Sole purpose of this controller is to satisfy health check for this app
 */

module.exports = {
    find: (req, res) => res.ok({ message: 'All is well!!' })
};
  