# User Directory - Angular App

A web application built with Angular that displays a user directory with search functionality, using the JSONPlaceholder API.

## Features

- Display users in a responsive card layout
- Real-time user search by name
- Modern interface using Angular Material
- REST API consumption (JSONPlaceholder)

## Prerequisites

- Node.js (version 16.x or higher)
- npm (included with Node.js)
- Angular CLI (latest version)

## Installation

1. Clone the repository:
```bash
git clone [repository-URL]
cd code-challenge
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

To start the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── user-list/    # Main user list component
│   │   └── user-card/    # Individual user card component
│   ├── services/
│   │   └── user.service.ts    # Service for fetching user data
│   └── models/
│       └── user.ts    # User model interface
```

## Technologies Used

- Angular 17+
- Angular Material
- TypeScript
- RxJS
- JSONPlaceholder API

## Technical Features

- Standalone Components
- Responsive design
- Reactive programming
- Component-based architecture
- Real-time search

## Development

To generate new components:
```bash
ng generate component component-name
```

To generate new services:
```bash
ng generate service service-name
```

## Testing

To run unit tests:
```bash
ng test
```

## Build

To build the project for production:
```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.