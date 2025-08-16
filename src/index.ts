import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

// Example route registration
app.use('/users', userRoutes);

app.get('/', (req, res) => {
	res.send('Property Management API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
