# Beer API
---
An API to rate and share your favorite beers with the beer loving community

## Getting Started

This section is intended for software developers.  If you have rights to the repo, simply clone the repo.  If you do not have rights to the repo, you may fork the repo and clone your fork.  

```
$ git clone https://github.com/camIAm/beerz-api-crudls.git
$ cd art-api-exam-nolist
$ npm install
```
## Environment Setup
### Objective
 Store the url and couch database name as separate environmental variables within your **.env** file.  Use these to create an environment variable named `COUCHDB_URL` and `COUCHDB_NAME`. These variable will later be concatenated to form the database path.
 Which can more generically be shown as:
`https://<port-of-db-instance>/<your-db-name>/`.

 ---
1. Create a `COUCH_URL` environment variable: This project runs a local CouchDB database instance.  

  **Example**
  ```
  COUCH_URL=http://localhost:5984/cam-art/
  ```

2.  Create a `PORT` environment variable used by the client application to connect and communicate with your api.

  **Example**

  ```
  PORT=4000
  ```

3. Create the `COUCH_URL` and  `COUCH_DB` environment variable.  The name of the database.

  **Example**
  ```
   COUCHDB_URL=http://localhost:5984
   COUCHDB_NAME=beers
  ```

  ### Starting the api

  Run the following command to start the api on localhost:4000.

  ```
  $ npm start
  ```

  ### Populate database with getting started data
  Run the following command to populate the database so that you have data to manipulate through CRUDLS operations
  ```
  $ npm run load
  ```
  This script will log in the console to notify the user if the data load succeeded or failed

***
  # Endpoints

  # `Beers`

  ### Create a beer - `POST /beers`

  Creates a beer and add it to the 'beers' collection

  **Example**

  ```
  POST /beers
  ```

  **Sample Request Body**
  ```
  {
    "_id": "beer_vary_hazy",
    "name": "Vary Hazy",
    "type": "Imperial IPA",
    "brewer": "Tree House Brewing Company",
    "ABV": "8.60",
    "score": 4.73,
    "ratings": 671
  }
  ```

  **Response 200**

  ```
  {
    "ok": true,
    "id": "beer_vary_hazy",
    "rev": "3-57780a04be5c2b4a4f043b1b3cce8bee"
}
  ```

  ## Get a beer - `GET /beers/{id}`

Retrieves a single painting object by the painting `{id}` route parameter.  

**Example**

```
GET /beers/beer_vary_hazy
```

**Response 200**

```
{
  "_id": "beer_vary_hazy",
  "name": "Vary Hazy",
  "type": "Imperial IPA",
  "brewer": "Tree House Brewing Company",
  "ABV": "8.60",
  "score": 4.73,
  "ratings": 671
}
```

### Route Parameters

  - `id` - used to identify a beer in the collection of beers.

## Update a beer - `PUT /beers/{id}`

Updates a single beer using the beer `{id}` route parameter.

**Example**

```
PUT /beers/beer_vary_hazy
```

**Sample Request Body**
```
{
  "_id": "beer_vary_hazy",
  "name": "Vary Hazy",
  "type": "Imperial IPA",
  "brewer": "Tree House Brewing Company",
  "ABV": "8.60",
  "score": 4.73,
  "ratings": 671
}
```
**Response 200**

```
{
    "ok": true,
    "id": "beer_vary_hazy",
    "rev": "2-88f302c43a0bca6c208903af2d21bfe5"
}
```

## Delete a beer - `DELETE /beers/{id}`

Deletes a single beer using the beer `{id}` route parameter.

**Example**

```
DELETE /beers/beer_vary_hazy
```

**Sample Request Body**
```
DELETE /beers/beer_vary_hazy
```
**Response 200**

```
{
    "ok": true,
    "id": "beer_vary_hazy",
    "rev": "3-b02bbd5e2c7e8db54bbdbb048bd000f7"
}
```



## List the beers - `GET /beers`
