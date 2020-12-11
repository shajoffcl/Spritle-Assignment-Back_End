function getUserName(email){
    var nameParts = email.split("@");
    var name = nameParts.length==2 ? nameParts[0] : null;
    return name;
}

module.exports=getUserName;