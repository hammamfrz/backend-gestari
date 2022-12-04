const cors = require('cors');

const corsOptions = {
    origin: 'https://hammerhead-app-zfi4g.ondigitalocean.app/',
    optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);