# pokemon API

### I have pokemon, and I want to share them with the world via an API.

### Desired features:

- Add pokedex
- Update a pokemon
- get all of my pokemon
- delete a pokemon
- get a random pokemon
- get one specific pokemon

### Nice-to-have:

- Sort By pokemon

### API Route to feature mapping

| Http Method | endpoint                   | corresponding feature          |
| ----------- | -------------------------- | ------------------------------ |
| POST        | `/pokemon`                 | Add pokedex                    |
| PUT         | `/pokemon/:id`             | Update a pokemon               |
| GET         | `/pokemon/all`             | get all of my pokemon          |
| GET         | `/pokemon/name/:id`        | get one specific pokemon       |
| GET         | `/pokemon/random`          | get random pokemon             |
| GET         | `/pokemon/evolution/:id`   | evolution for specific pokemon |
| DELETE      | `/pokemon/name/delete/:id` | delete a pokemon               |
