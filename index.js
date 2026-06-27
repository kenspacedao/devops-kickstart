const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Initialize Redis Client
const redisClient = createClient({ url: REDIS_URL });

redisClient.on('error', (err) => console.log('Redis Client Error', err));

async function connectRedis() {
    try {
        await redisClient.connect();
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Failed to connect to Redis. Running without database:', err.message);
    }
}
connectRedis();

// Home route with page view counter
app.get('/', async (req, res) => {
    let views = 'Database unavailable';
    if (redisClient.isOpen) {
        try {
            views = await redisClient.incr('page_views');
        } catch (err) {
            console.error('Failed to increment views:', err);
        }
    }
    res.json({
        message: "Hello DevOps! The app is running.",
        page_views: views
    });
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: "healthy", timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
