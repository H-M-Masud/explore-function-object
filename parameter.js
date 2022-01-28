function bringSingara(taka){
    console.log('Singara er jonno dise',taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 90;
var singara = bringSingara(money);
console.log(singara)