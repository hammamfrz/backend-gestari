const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./app/user/route');
const katalogRouter = require('./app/katalog/route');
const journeyRouter = require('./app/journey/route');
const transactionRouter = require('./app/transaction/route')
const inventoryRouter = require('./app/inventaris/route')
const orderRouter = require('./app/order/route')
const corsMiddleware = require('./middleware/cors');
const router = require('./routes');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'public/images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 2000000 // 2000000 Bytes = 2 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
});

app.use(corsMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.use('/user', userRouter);
app.use('/katalog', katalogRouter);
app.use('/journey', journeyRouter);
app.use('/transaction', transactionRouter);
app.use('/inventory', inventoryRouter);
app.use('/order', orderRouter);
app.post('/uploads', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});

module.exports = app;
