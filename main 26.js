(function () {
    hcap.property.setProperty({
        "key" : "boot_sequence_option", 
        "value" : "1", 
        "onSuccess" : function() {
            console.log("onSuccess");
        }, 
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
   
    hcap.key.clearKeyTable({
        "onSuccess" : function() {
        console.log("onSuccess");
        },
        "onFailure" : function(f) {
        console.log("onFailure : errorMessage = " + f.errorMessage);
        }
        });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode":hcap.key.Code.EXIT,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode":hcap.key.Code.INFO,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
      hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode":hcap.key.Code.INPUT,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode":hcap.key.Code.GUIDE,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    
    hcap.property.setProperty({
        "key": "tv_channel_attribute_floating_ui",
        "value": "0",
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.property.setProperty({
      key: "display_resolution",
      value: "1920x1080",
      onSuccess: function () {
        console.log("onSuccess");
      },
      onFailure: function (f) {
        console.log("Failure : errorMessage = " + f.errorMessage);
      },
    });
    hcap.property.setInstallerMenuItem({

        "key" : hcap.property.InstallerMenuItem.SIMPLINK_EN,
    
        "value" : 1,
    
        "onSuccess" : function() {
    
          console.log("onSuccess");
    
        }, 
    
        "onFailure" : function(f) {
    
          console.log("onFailure : errorMessage = " + f.errorMessage);
    
        }
    
      });
    hcap.property.setProperty({
        "key" : "key_delivery_to_simplink", 
        "value" : "0", 
        "onSuccess" : function() {
            console.log("onSuccess");
        }, 
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
   });
    hcap.property.setProperty({
       "key" : "instant_power", 
       "value" : "2", 
       "onSuccess" : function() {
           console.log("onSuccess");
         
           
           
       
       
       }, 
       "onFailure" : function(f) {
           console.log("onFailure : errorMessage = " + f.errorMessage);
          
       }
    });
    
    hcap.mouse.setMouseVisible({
    "isVisible":false,
    "onSuccess":function() {
     console.log("onSuccess");
    }, 
    "onFailure":function(f) {
     console.log("onFailure : errorMessage = " + f.errorMessage);
    }
    });
    hcap.property.setProperty({
        "key": "security_level",
        "value": "1",
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    
    });
    // hcap.key.addKeyItem({
    //     "keycode" : 0,
    //     "virtualKeycode" : hcap.key.Code.BACK,
    //     "attribute" : 0,
    //     "onSuccess" : function() {
    //         console.log("onSuccess");
    //     }, 
    //     "onFailure" : function(f) {
    //         console.log("onFailure : errorMessage = " + f.errorMessage);
    //     }
    // });
    
    hcap.key.addKeyItem({
    "keycode" : 0x00000000,
    "virtualKeycode" : hcap.key.Code.MENU,
    "attribute" :2, //2:Processed by application, 0:Processed by TV
    "onSuccess" : function() {
    console.log("onSuccess");
    },
    "onFailure" : function(f) {
    console.log("onFailure : errorMessage = " + f.errorMessage);
    }
    });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode": hcap.key.Code.SMART_HOME,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.key.addKeyItem({
        "keycode" : 0,
        "virtualKeycode" : hcap.key.Code.LIVE, //(or hcap.key.Code.ZOOM)
        "attribute" : 2, //2 : Processed by application, 0 : Processed by TV
        "onSuccess" : function() {
            console.log("onSuccess");
        }, 
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    
    
    
    
    hcap.key.addKeyItem({
        "keycode" : 0,
        "virtualKeycode" : hcap.key.Code.APPS,
        "attribute" : 2,
        "onSuccess" : function() {
            console.log("onSuccess");
        }, 
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    })
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode": hcap.key.Code.VOL_UP,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode": hcap.key.Code.VOL_DOWN,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
    hcap.key.addKeyItem({
        "keycode": 0x00000000,
        "virtualKeycode": hcap.key.Code.MUTE,
        "attribute": 2, //2:Processed by application, 0:Processed by TV
        "onSuccess": function () {
            console.log("onSuccess");
        },
        "onFailure": function (f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
     hcap.property.getProperty({
            "key": "tv_caption_ui",
            "onSuccess": function (s) {
                console.log("onSuccess : property value = " + s.value);
            },
            "onFailure": function (f) {
                console.log("onFailure : errorMessage = " + f.errorMessage);
            }
        });
        hcap.property.setProperty({
            "key": "tv_caption_ui",
            "value": "1",
            "onSuccess": function () {
                console.log("onSuccess");
            },
            "onFailure": function (f) {
                console.log("onFailure : errorMessage = " + f.errorMessage);
            }
        });
    
  })();  