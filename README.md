
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
