# Welcome!

In this repo, I will be creating a databse that stores information about celebrities.  I will then use this data to create queries in mongoDB.  Please continue reading for instructions on how to use this files.

## User instructions

- clone this repo & `cd elwin-nosql`
- `docker run --name celeb-db --mount type=bind,source="$(pwd)",dst="/code" -d mongo`
- `docker exec -it celeb-db mongo` (to open the mongo shell)
- `load('code/db/setup.js')`

To try the helper functions:

- ...Add instruction here once finished

To exit the mongo shell:

- `quit()`

To close and remove container (optional):
- `docker stop celeb-db` to stop container
- `docker rm celeb-db` to remove container
- `docker ps -a` to double check that the container has been removed properly


### Study Notes

I used these study notes to help me with the tasks (outlined below)

[NoSQL](https://github.com/getfutureproof/fp_guides_wiki/wiki/NoSQL)

### Exercises

Complete these first in MongoDB and if time allows, recreate with an alternative NoSQL solution.

- [ ] Create a database to store data about celebrities:
  - [ ] Include their name, age and birthplace
  - [ ] If appropriate, include data on relationship status, children, awards, acheivements
  - [ ] Do not follow a strict schema, be flexible on the data provided dependent on the celebrity
- [ ] Craft queries to return:

  - [ ] names of all celebrities in database
  - [ ] number of celebrities in database who have children
  - [ ] summary of total number of awards won grouped by birthplace

- [ ] Design some more queries!