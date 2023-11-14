module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        name: DataTypes.STRING,
    }, {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
    });
    // Category.associate = (models) => {
    //   Category.hasMany(models.Post, {
    //     foreignKey: 'categoryId',
    //     as: 'posts',
    //   });
    // }
    return Category;
    }