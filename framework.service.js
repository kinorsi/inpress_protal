(function(){

  angular.module('com.kinorsi.frameworkhybirdapp', [])

  //-------------------------文件管理--------------------------------
  .factory('FileMgr', [function () {

    //func: 设置应该的配置文件，其实就是常用的参数而已。key是健，value是值, auto如果为true表示没有的key自动生成一个。
    function setAppConfig(key, value, auto){

    }

    /* func:取应用配置项，key是健。default表示这个key不存在时，返回的默认值，可以不填。*/
    function getAppConfig(key, default){

    }


    return {
      'setAppConfig': setAppConfig,
      'getAppConfig': getAppConfig
    }

  }]);

  // 文件读取，一是基本的key-value

})();