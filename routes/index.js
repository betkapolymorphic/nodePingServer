var express = require('express');
var router = express.Router();
var db = require('../lib/db');
var async = require('async');
var servResponse = require('../lib/serverResponse');
var validator = require('./validator/ping');
/* Test action */
router.get('/',
    validator.index,
    function(req, res, next) {
    var GUID = req.query.GUID;
    var text = req.query.text;


    var Ping = db.schemes.Ping;
    var ping = { GUID : GUID,
        text: text,
        updatedAt: db.sequelize.fn('NOW')};
    Ping.findOrCreate({where :{GUID:GUID},defaults:ping}).
        spread(function(pingRes,created){
            if(created){
                ping.updatedAt = undefined;
                res.send(servResponse.success(ping));
            }else{
               pingRes.updateAttributes(ping).then(function(){
                   ping.updatedAt = undefined;
                  res.send(servResponse.success(ping));
               });
            }
        });


});

module.exports = router;
