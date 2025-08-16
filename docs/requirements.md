### Project Requisites Document
# Overview
Project name: Booking and Tasks Management System for a Hotel
Date: 2025-08-16
Purpose: The aim of this management system is primarily to personally learn TDD and OOP techniques and design principles, as well as practicing implementing design patterns, designing unitary test classes, and learn TypeScript with an interesting project. \
Also, this project is important for me because I feel it serves a good purpose. Some weeks ago, I was told by an entrepreneur --by that time my landlord, now my friend-- that online reservation sites can charge up to 25% of an actual reservation, which meant that she was losing each month a great deal of money. \
Just some days later, I started to work at a hostel, and came in contact with a real life hotel management system. Astonished with the level of integration and the capabilities of such system, I started thinking of the use cases of this type of system, and the opportunity I couldn't refuse to make one on my own. \
That's how this project came to life!

# Objectives
The main objective I want this system to fulfill is being able to effectively manage reservations and managing tasks for a simple small hotel or other kind of property such as an apartment or hostel.

# Scope
This project should let the guests make bookings and reservations, cancel them, or change the dates, as well as make payments and check availability of rooms. It should also let Employees manage all those things on behalf of a guest, as a client should be able to call the employee for making the reservation or make it on reception, without interacting with the system directly.
Employees should be able to manage the properties, creating and removing rooms from the system, as well as organizing work through the task and schedule system, associatedto different employees and roles.
Employees should also be able to add, remove and modify users in the system, as well as actually customizing the business model. \
On the other hand, managing multiple properties is out of the scope of this system. For that purpose, it is possible to define multiple properties as rooms inside a virtual Hotel.

# Functional Requirements
Note:
```
The difference between a reservation and booking is that the booking is entirely payed before being effective, while just a small amount of money is payed in a reservation, for the purpose of time-blocking and losing less money in case of non-refundable cancellation.
```

Any **User Actor** should be able to create an account in the *SYSTEM*.
Any **User Actor** should be able to modify its data in the *SYSTEM*.
Any **User Actor** should be able to remove its data in the *SYSTEM*.
The **Guest Actor** is required to be over 18 to make a booking or reservation, although can be younger to be in the *SYSTEM*.
The **Employee Actor** is required to have the minimum age to work in the desired country.
Each **User Actor** must have a unique identifier.
Any **User Actor** is required to provide user contact information in the *SYSTEM*.
The **User Actor** might be required to introduce billing address information.
The **Guest Actor** should be able to check in and out of the room.
The **Guest Actor** should be able to select available dates for a room.
The **Guest Actor** should be able to select a room from the hotel.
The **Guest Actor** should be able to make a reservation.
The **Guest Actor** should be able to make a booking.
The **Guest Actor** should be able to modify a reservation.
The **Guest Actor** should be able to modify a booking.
The **Guest Actor** should be able to remove a reservation.
The **Guest Actor** should be able to remove a booking.
The **Guest Actor** should be able to pay a reservation.
The **Guest Actor** should be able to pay a booking.
The **Guest Actor** should be able to introduce payment information for processing the payment in the *SYSTEM*.
The **Guest Actor** should be able to choose between card, cash, and virtual card payment methods.
The **Guest Actor** should be able to pay in different currencies.
The **Guest Actor** might be offered discounts for their booking or reservation.
Each booking should be able to include several rooms.
The **Employee Actor** can be assigned one or more tasks, as well as a room for those tasks.
The **Employee Actor** should be able to see its schedule with assigned tasks.
The **Employee Actor** should be able to clock in and out of its shift.
The **Employee Actor** can have various roles assigned at the same time.
The **Cleaning Actor** should be able to see checkouts from rooms to plan its schedule.
The **Cleaning Actor** should be able to state in the *SYSTEM* that a room has been clean.
The **Manager Actor** should be able to create rooms from the *SYSTEM*.
The **Manager Actor** should be able to modify rooms from the *SYSTEM*.
The **Manager Actor** should be able to remove rooms from the *SYSTEM*.
The **Manager Actor** should be able to create tasks and modify schedules for its **Employee Actors**.
The **Human Resources Actor** should be able to add roles to **Employee Actors**.
The **Human Resources Actor** should be able to add **Employee Actors** to the *SYSTEM*.
The **Human Resources Actor** should be able to get **Employee Actors'** information from the *SYSTEM*.
The **Receptionist Actor** should be able to check in and out on behalf of **Guest Actors**.
The **Receptionist Actor** should be able to pay reservations on behalf of **Guest Actors**.
The **Receptionist Actor** should be able to get a list of bookings from the *SYSTEM*.
The **Receptionist Actor** should be able to get a list of reservations from the *SYSTEM*.
The **Receptionist Actor** should be able to get information from a given booking.
The **Receptionist Actor** should be able to get information from a given reservation.
The **Receptionist Actor** should be able to get information from a given room.
The **Receptionist Actor** should be able to get information from a given **Guest Actor**.
The **Receptionist Actor** should be able to create a new **Guest Actor** in the *SYSTEM*.
The **Receptionist Actor** should be able to modify the information from a **Guest Actor** in the *SYSTEM*.
The **Receptionist Actor** should be able to remove a **Guest Actor** from the *SYSTEM*.


# Non-functional Requirements
All unique identifiers for **User Actor** and payments must follow the UUID standard.
The *SYSTEM* should be design taking into account a single property.
The *SYSTEM* should log all information regarding important operations such as payments, user creation, modification and removal, and new bookings and reservations.
The server should be light, in order to be able to be hosted locally, as well as being higly scallable and versatile.


# Technical Requisites
The *SYSTEM* will be written primarily in TypeScript. It is desirable because the core logic of the business requires strong typing system and security. Also, it should be a web application. The backend server and thus the core business logic will be created with NodeJS and Express, while the frontend will be created using React components to offer a modern UI approach.
