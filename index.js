function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function(){ return 5 + 5});

let returnsANamedFunction = function(){
    return receivesAFunction;
}

returnsANamedFunction;

function returnsAnAnonymousFunction(){
    return function() {console.log("I'm anonymous")};
}

returnsAnAnonymousFunction();
