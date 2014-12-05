(function(){
    window.apply_test = function(){
        var args = [].slice.call(arguments);
        console.log('arguments received:', args);
        return args.length;
    };

    console.log('bg started', window.ff_test);
}());
