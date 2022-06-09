function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction() {
    // function named() {
        
    // }
    // return named
    let named = () =>{}
    return named
}
function returnsAnAnonymousFunction(){
    // return function () {
        
    // }
    return ()=>{}
}
