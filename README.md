# Air Quality Index Location Viewer

Created for New Jersey Office of Innovation by Paul Bickford.

## About

This app retrieves and display the air quality index for four cities, the first of which is set to the users location.

It was written using NextJS and TypeScript with Playwright and Jest used for testing.

## Getting Started

### Prerequisites

You must have installed:

- Docker (https://www.docker.com/get-started/)
- Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- A valid token for aqi.waqi.info.
- Npm or Yarn (if you want to run in development mode).

### Installation

Clone repo into desired directory.

Navigate into app's root directory, create a file named `.env`, and place the aqi.waqi.info token inside:

```
AQI_TOKEN=<token>
```

### Run

#### Production

Spin up docker instance.

Open browser to http://localhost:3000.

#### Development

To run the development server, navigate to project root directory.

```bash
npm init
npm run dev
# or
yarn
yarn dev
```
Open browser to http://localhost:3000.

## To do

- Make aqi background and text color complimentary.
- Style mobile
- Change Favicon
- Check formatting (indents, semi-colons, last comma, console.logs)