
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-datepicker.DatePicker",
          "file": "plugins/cordova-plugin-datepicker/www/ios/DatePicker.js",
          "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
          "datePicker"
        ]
        },
      {
          "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
          "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
          "pluginId": "cordova-plugin-telerik-imagepicker",
        "clobbers": [
          "plugins.imagePicker"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-datepicker": "0.9.3",
      "cordova-plugin-telerik-imagepicker": "2.3.5"
    };
    // BOTTOM OF METADATA
    });
    