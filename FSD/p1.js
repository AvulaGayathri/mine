var censoredwords=["sad","mad","bad"];
var customcensoredwords=[];
function censor(inStr){
    for(idx in censoredwords){
    inStr=inStr.replace(censoredwords[idx],"****");
    }
    for(idx in customcensoredwords){
    inStr=inStr.replace(censoredwords[idx],"****");
    }
    return inStr;
}
function addcensoredwords(word){
    customcensoredwords.push(word);
}
function getcensoredwords(){
    return censoredwords.concat(customcensoredwords);
}
exports.censor=censor;
exports.addcensoredwords=addcensoredwords;
exports.getcensoredwords=getcensoredwords;