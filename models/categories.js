module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories' , {
        category: DataTypes.STRING
        
    });

    Categories.associate = function(models) {
        Categories.hasMany(models.Todos)
        
    }
    return Categories;
};
