# get_the_gists
A simple Node server to view and favorite GitHub gists by Max Sprauer

I spent about 3 hours on this.  I know I violated the 2 hour limit, but I decided to forge ahead with Node.js and Express even though
they had a learning curve for me.  Also once I start something, I can't stop until it's done.  :-)

# Building, running, and testing

## Creating the database
1. Install Docker if not installed
2. In the `db` directory, run `docker build .` to build a mariadb container
3. Run `./run.sh` to start the mariadb container

Note: On Macintosh, the container will listen on localhost:3306.  Other platforms may require a different address for the container.

## Running the Node app
1. In the `app` directory, run `npm install`
2. Run `npm start` to start the application on localhost:3000.

## Testing
1. Use the included `Gists.postman_collection.json` file in the `tests` with Postman.


# API routes
Your API should expose an endpoint/query that, given a username, returns the public gists for that particular user
  GET /users/USERNAME/gists

Your API should expose an endpoint/query that, given a gist ID, returns a specific gist
  GET /gists/GISTID

Your API should expose an endpoint/mutation that, given a gist ID, marks the gist as favorited
Your API should expose an endpoint/mutation that, given a gist ID, marks the gist as not-favorited
  PUT /gists/GISTID/favorite
  DELETE /gists/GISTID/favorite

Your API should expose an endpoint/query that returns all gists marked as favorites.
  GET /gists/favorites
