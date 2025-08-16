export enum PaymentMethod {
	Card = 'Card',
	Cash = 'Cash',
	VirtualCard = 'VirtualCard',
}

export enum Nationality {
	US = 'US',
	CA = 'CA',
	UK = 'UK',
	DE = 'DE',
	FR = 'FR',
	ES = 'ES',
	IT = 'IT',
	Other = 'Other',
}

export enum TaskType {
	Cleaning = 'Cleaning',
	Maintenance = 'Maintenance',
	Reception = 'Reception',
	HR = 'HR',
}

export enum TaskStatus {
	Pending = 'Pending',
	InProgress = 'InProgress',
	Completed = 'Completed',
	Cancelled = 'Cancelled',
}

export enum ReservationStatus {
	Pending = 'Pending',
	Confirmed = 'Confirmed',
	Cancelled = 'Cancelled',
}

export enum RoomStatus {
	Available = 'Available',
	Occupied = 'Occupied',
	Cleaning = 'Cleaning',
	Maintenance = 'Maintenance',
}

export enum PaymentStatus {
	Pending = 'Pending',
	Completed = 'Completed',
	Failed = 'Failed',
}
