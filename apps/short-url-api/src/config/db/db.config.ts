import * as mongoose from 'mongoose';

// declare a Database string URI
const DB_URI = 'mongodb://cdeneau:mongodb@127.0.0.1:27017/qr-codes';

// establishing a database connection
mongoose.connect(DB_URI, {});

export const connection = mongoose.connection;
