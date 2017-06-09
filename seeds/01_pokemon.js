exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('pokemon').del()
        .then(function() {
            // Inserts seed entries
            return knex('pokemon').insert([{
                    id: 1,
                    pokedex_id: 1,
                    name: 'Bulbasaur',
                    type: 'grass',
                    evolves_from: 'egg',
                    image_url: 'http://www.pokestadium.com/sprites/xy/bulbasaur.gif'
                },
                {
                    id: 2,
                    pokedex_id: 2,
                    name: 'Ivysaur',
                    type: 'grass',
                    evolves_from: 'Bulbasaur',
                    image_url: 'http://www.pokestadium.com/sprites/xy/ivysaur.gif'
                },
                {
                    id: 3,
                    pokedex_id: 3,
                    name: 'Venusaur',
                    type: 'grass',
                    evolves_from: 'Ivysaur',
                    image_url: 'http://www.pokestadium.com/sprites/xy/venusaur.gif'
                },

                {
                    id: 4,
                    pokedex_id: 4,
                    name: 'Charmander',
                    type: 'fire',
                    evolves_from: 'egg',
                    image_url: 'http://www.pokestadium.com/sprites/xy/charmander.gif'
                },
                {
                    id: 5,
                    pokedex_id: 5,
                    name: 'Charmeleon',
                    type: 'fire',
                    evolves_from: 'Charmander',
                    image_url: 'http://www.pokestadium.com/sprites/xy/charmeleon.gif'
                },
                {
                    id: 6,
                    pokedex_id: 6,
                    name: 'Charizard',
                    type: 'fire',
                    evolves_from: 'Charmeleon',
                    image_url: 'http://www.pokestadium.com/sprites/xy/charizard.gif'
                },
                {
                    id: 7,
                    pokedex_id: 7,
                    name: 'Squirtle',
                    type: 'water',
                    evolves_from: 'egg',
                    image_url: 'http://www.pokestadium.com/sprites/xy/squirtle.gif'
                },
                {
                    id: 8,
                    pokedex_id: 8,
                    name: 'Wartortle',
                    type: 'water',
                    evolves_from: 'Squirtle',
                    image_url: 'http://www.pokestadium.com/sprites/xy/wartortle.gif'
                },
                {
                    id: 9,
                    pokedex_id: 9,
                    name: 'Blastoise',
                    type: 'water',
                    evolves_from: 'Wartortle',
                    image_url: 'http://www.pokestadium.com/sprites/xy/blastoise.gif'
                },
            ]);
        });
};
