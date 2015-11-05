/**
 * Created by Vafle on 11/5/2015.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize('my_db', 'root', '');
var Ping = sequelize.define('Ping', {
    idping: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    GUID : Sequelize.STRING,
    text: Sequelize.STRING

});
var Schemes = {Ping : Ping};
module.exports = {sequelize :sequelize,Sequelize:Sequelize,schemes : Schemes};

