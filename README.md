# Air Quality Index Location Viewer

Created for New Jersey Office of Innovation by Paul Bickford.

## About

This app retrieves and displays the air quality index for four cities, the first of which is set to the user's location.

It was written using NextJS and TypeScript with tests in Playwright and Jest.

## Getting Started

### Prerequisites

You must have installed:

- Docker (https://www.docker.com/get-started/)
- Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- A valid token for aqi.waqi.info.
- Npm or Yarn (if you want to run in development mode).

### Installation

In the terminal, navigate to the directory which will contain the project directory, clone the project repo, and navigate into it.

```bash
cd .../the/containing/directory
git clone https://github.com/paulbickford/aqi-app.git 
cd app-aqi
```

Create a file named `.env.local` and copy the aqi.waqi.info token inside:

```
NEXT_PUBLIC_AQI_TOKEN=<token>
```
### Run

#### Production

From the project's root directory, build and start the app.

```bash
cd .../aqi-app
sudo docker compose up -d
```
Once the docker instance is built and started, open browser to http://localhost:3000.

#### Development

To start the app in development mode, navigate to project root directory, load dependencies, and run.

```bash
cd ~/.../aqi-app
npm init
npm run dev
# or
yarn
yarn dev
```
Open browser to http://localhost:3000.

### Tests

To run tests

```bash
# Jest tests
npm testj
# or
yarn testj
# Playwright tests
npm testpw
# or
yarn testpw
```