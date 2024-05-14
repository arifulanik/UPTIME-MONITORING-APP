/*
 * Title: Routes
 * Description: Application Routes
 * Author: Ariful Islam
 * Date: 21/04/2024
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token:tokenHandler,
};

module.exports = routes;
