
# Property Management System Backend

This is a TypeScript NodeJS backend for a property management system, following modular design and OOP principles.

## Project Structure

- **src/routes/**: API route definitions (Express)
- **src/models/**: Domain models (User, Guest, Employee, Booking, Reservation, Payment, etc.)
- **src/controllers/**: Request controllers
- **src/middlewares/**: Middlewares (auth, cors, etc.)
- **src/services/**: Service logic (e.g., payment)
- **src/config/**: Configuration files (dotenv supported)
- **src/logs/**: Static log keeping (LogEntry class)
- **tests/**: Unit tests for all major classes (Jest)

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Start development server:
	```bash
	npm run dev
	```
3. Build and run production server:
	```bash
	npm run build
	npm start
	```

## Testing

Run all unit tests:
```bash
npx jest
```
Tests cover all main models and use cases. Follow TDD by writing tests for each use case before implementing logic.

## Design Principles

- **OOP:** Inheritance, composition, and interfaces (Role, PaymentInformation)
- **Modular:** Separation of concerns by domain and responsibility
- **RESTful:** API routes follow REST conventions
- **Configurable:** Uses dotenv for environment configuration
- **Logging:** Centralized static logging via LogEntry class
- **TDD:** Comprehensive Jest test suite for all classes and use cases

## Example

Express server entry point (`src/index.ts`):
```typescript
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Property Management API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Submit a pull request

## License

MIT
