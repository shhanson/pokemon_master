module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || 'postgres://localhost/pokemon_data_dev'
    },

    test: {
        client: 'pg',
        connection: process.env.TEST_DATABASE_URL || 'postgres://localhost/pokemon_data_trackify'
    }

};
