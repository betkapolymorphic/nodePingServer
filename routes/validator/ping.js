/**
 * Created by Vafle on 11/5/2015.
 */
var servResponse = require('../../lib/serverResponse');
module.exports.index = function(req,res,next)
{
    var GUID = req.query.GUID;
    var text = req.query.text;
    if(!GUID || !text) return res.send(servResponse.error("empty arguments"));
    next();
};
module.exports.find= function(req,res,next)
{
    var GUID = req.query.GUID;

    if(!GUID) return res.send(servResponse.error("empty arguments"));
    next();
};