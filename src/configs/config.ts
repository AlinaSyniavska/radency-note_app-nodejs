const dbUrl = 'mongodb+srv://user:LcEkMOfi2FssRzRF@cluster0.rdkochd.mongodb.net/radency-note-app?retryWrites=true&w=majority';

export const config = {
    PORT: process.env.PORT || 5001,
    NODE_ENV: process.env.NODE_ENV,
    // MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/test',
    MONGO_URL: dbUrl || 'mongodb://localhost:27017/test',
};
