module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'projetotdig',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    }
};