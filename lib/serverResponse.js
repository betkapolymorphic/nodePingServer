/**
 * Created by Vafle on 11/5/2015.
 */
module.exports = {
    success :function(message){
        return {success:true,message:message}
    },
    error : function(message){
        return {success:false,message:message};
    }
};

