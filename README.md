# Express.js 404 Error for Valid User IDs

This repository demonstrates a common issue in Express.js applications where a 404 error is returned even when a valid user ID is provided. The problem arises from the way asynchronous operations, such as database queries, are handled in the route handler.

## Bug Description

The `/users/:id` route attempts to fetch user data from a database. If the data is not found, a 404 error is returned. However, if the database operation is asynchronous and the `userData` variable is not populated before the `res.send()` or `res.status()` call,  the server responds with 404, even if the data exists. This happens because the asynchronous operation might take longer than the `res.status()` call.

## Solution

The solution involves using promises or async/await to ensure that the `userData` variable is populated before sending the response.  The correct way is to wait for the database query to complete before sending any response.

## How to reproduce the bug

1. Clone this repository.
2. Install the dependencies: `npm install`.
3. Run the application: `node bug.js`.
4. Send a request to `/users/:id` with a valid user ID. You will likely get a 404 error.

## How to fix the bug

Examine `bugSolution.js` for a corrected version that handles the asynchronous operation properly.