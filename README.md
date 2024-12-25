# Easy to Coach

A web application built with **Ionic v1.7** and **AngularJS** (1.x), designed to manage and view team data, players, matches, and more. The application is compatible with **Node.js v6.17**.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)

## Project Overview

The "Easy to Coach" app allows users to log in, view teams, players, matches, and manage team data in a coach-friendly interface. It uses the following technologies:
- **Ionic Framework v1.7**: To build cross-platform hybrid apps using AngularJS.
- **AngularJS v1.x**: The JavaScript framework for creating dynamic single-page applications (SPAs).
- **Node.js v6.17**: The server-side runtime for the application.

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (v6.17 or compatible)
- **Ionic CLI** (for running and building the project)

You can install Node.js from [here](https://nodejs.org/en/download/). If you don’t have the Ionic CLI installed, you can do so with the following command:

```bash
npm install -g ionic@1.7
```

## Running the Project

To start the development server and run the app locally, execute the following command in the project root directory:

```bash
ionic serve
```

This will launch a local server and open the app in your default web browser. The app will be available at http://localhost:8100.

## Project Structure
Here's an overview of the project's directory structure:

```yaml
www/
    ├── css/                      # Contains stylesheets
    ├── img/                      # Contains images
    ├── js/
    │   ├── components/           # Custom components
    │   │   └── no-record-found/
    │   │       ├── no-record-found.js
    │   │       └── no-record-found.html
    │   ├── home/                 # Home page logic and templates
    │   │   ├── home.js
    │   │   └── home.html
    │   ├── login/                # Login page logic and templates
    │   │   ├── login.js
    │   │   └── login.html
    │   ├── matches/              # Matches page logic and templates
    │   │   ├── matches.js
    │   │   └── matches.html
    │   ├── pipes/                # Custom pipes (e.g., title case transformation)
    │   │   └── titleCase.js
    │   ├── players/              # Players page logic and templates
    │   │   ├── players.js
    │   │   └── players.html
    │   ├── services/             # Data services for API calls and business logic
    │   │   └── dataService.js
    │   ├── teams/                # Teams page logic and templates
    │   │   ├── teams.js
    │   │   └── teams.html
    ├── app.js                     # Main app configuration and initialization
    ├── index.html                 # The main HTML entry point
    ├── manifest.json              # Web app manifest
    └── service-worker.js          # Service worker for offline capabilities
```

## Live Demo

You can try a live demo of the application at the following URL:
[Live Demo](https://easy-to-coach.vercel.app/#/login)
