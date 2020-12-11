function getUniquePassword(){
    const B62_EXPRESSION="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text="";
    for(let i=0;i<7;i++){
        text+=B62_EXPRESSION.charAt(Math.floor(Math.random()*62))
    }
    return text;
}
module.exports=getUniquePassword;