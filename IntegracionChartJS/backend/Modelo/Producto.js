const { DataTypes } = require('sequelize');
const sequelize= require('../conexion/database');

const Productos = sequelize.define('product_V6', {
    PART_NUMBER: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    PRODUCT_TYPE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    CATEGORY_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    BRAND_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    FAMILY_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    LINE_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PRODUCT_SEGMENT_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    STATUS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    VALUE: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: true
    },
    VALUE_CURRENCY: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    DEFAULT_QUANTITY_UNITS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    NAME: {
        type: DataTypes.TEXT, 
        allowNull: true
    },
    DESCRIPTION: {
        type: DataTypes.TEXT, 
        allowNull: true
    },
    PLANNER_CODE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SOURCE_LINK: {
        type: DataTypes.TEXT, 
        allowNull: true
    }
}, {
    tableName: 'product_v6',
    timestamps: false
});

module.exports = Productos;