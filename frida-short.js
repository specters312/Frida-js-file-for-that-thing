setTimeout(function(){
    Java.perform(function() {
        var trustkit = Java.use('com.datatheorem.android.trustkit.pinning.PinningTrustManager');
        trustkit.checkServerTrusted.implementation = function() {
            return 0;
        };
    });
},0);
