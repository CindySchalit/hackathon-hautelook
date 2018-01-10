const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    films: [String]
    species: [String]
    vehicles: [String]
    starships: [String]
    created: String
    edited: String
    url: String
  }

  type Film {
    title: String
    episode_id: Int,
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    characters: [String]
    planets: [String]
    starships: [String]
    vehicles: [String]
    species: [String]
    created: String
    edited: String
    url: String
  }

  type Planet {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    residents: [String]
    films: [String]
    created: String
    edited: String
    url: String
  }

  type Query {
    person: Person
    film: Film
    planet: Planet
  }
`)
