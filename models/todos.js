module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('Todos' , {
        title: DataTypes.STRING,
        text: DataTypes.STRING,
       CategoryId: DataTypes.INTEGER
        
        
    });
    Todos.associate = function(models) {
        Todos.hasOne(models.Categories , {
            as: 'Current',
            foreignKey: 'currentCategoryId',
            constraints: false
        });
    }


    

    return Todos;

};