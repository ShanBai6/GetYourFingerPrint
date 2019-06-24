//fingerprint copy
/*
 * This is the master fingerprint database. Here users can add in fingerprints for other routers they wish to be able to identify with this framework.
*/
var fingerprints = [
    {
        'name': "Mercury MW155R",
        'resources': ["/dynaform/css_main.css", "/dynaform/css_help.css"],
        'callback': function (ip) {
            console.log("Found Mercury Device at IP: " + ip)
        },
    },
    {
        'name': "ASUS RT-N66U",
        'resources': [["/images/New_ui/networkmap/linetwo2.png",270,2],["/images/alertImg.png",92,92],["/switcherplugin/iphone_switch_container_off.png",75,32],"/NM_style.css","/form_style.css","/general.js","/device-map/formcontrol.js","/ajax.js","/state.js","/jquery.js","/switcherplugin/jquery.iphone-switch.js","/device-map/router.asp",["/images/New_ui/asustitle.png",218,54],["/images/loading.gif",66,66],["/images/New_ui/networkmap/line_one.png",7,22],["/images/New_ui/networkmap/lock.png",23,23],["/images/New_ui/networkmap/line_two.png",180,57],"/index_style.css","/other.css","/md5.js","/popup.js","/disk_functions.js","/client_function.js","/help.js","/detect.js"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "ASUS RT-AC66U",
        'resources': ["/images/New_ui/asustitle.png","/images/loading.gif","/images/alertImg.png","/images/white%20arrow.png","/images/New_ui/networkmap/line_one.png","/images/New_ui/networkmap/unlock.png","/images/New_ui/networkmap/line_two.png","/images/quotabar.gif","/index_style.css","/form_style.css","/NM_style.css","/other.css"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "ASUS RT-N16",
        'resources': ["/images/top-03.gif","/images/top.gif","/images/DrsurfImg.gif","/images/m-button-07end.gif","/images/quotabar.gif","/index_style.css","/form_style.css","/NM_style.css","/other.css"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Linksys WRT54G",
        'resources': ["/UILinksys.gif","/UI_10.gif","/UI_07.gif","/UI_06.gif","/UI_03.gif","/UI_02.gif","/UI_Cisco.gif","/style.css"],
        'callback': function( ip ) {
            // Insert exploit here            

        },
    },
    {
        'name': "TPLINK Archer C7 AC1750",
        'resources': ["/dynaform/css_main.css", "/dynaform/css_help.css", "/images/top1_1.jpg", "/images/blue.jpg", "/images/top_bg.jpg", "/images/top1_2.jpg"],
        'callback': function( ip ) {
            // Insert exploit here
            console.log("Found TPLINK Archer Device")

        },
    },
    {
        'name': "TPLINK Archer C7 AC1750 (Logged Out)",
        'resources': [["/login/top1_1.jpg",280,87],["/login/top2.jpg",770,3]],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Epson WF-3520 Printer",
        'resources': ["/PRESENTATION/IMAGE/EPSONLOGO.PNG","/PRESENTATION/IMAGE/SEPARATOR.PNG","/PRESENTATION/IMAGE/EC_ILL.PNG","/PRESENTATION/IMAGE/GCP_ILL.PNG","/PRESENTATION/IMAGE/C_B_ILL.PNG","/PRESENTATION/IMAGE/B_C_ILL.PNG","/PRESENTATION/IMAGE/AIRP_ILL.PNG","/PRESENTATION/IMAGE/PRTINFO_ILL.PNG","/PRESENTATION/IMAGE/EC_BTN.PNG","/PRESENTATION/IMAGE/GCP_BTN.PNG","/PRESENTATION/IMAGE/C_B_BTN.PNG","/PRESENTATION/IMAGE/B_C_BTN.PNG","/PRESENTATION/IMAGE/AIRP_BTN.PNG","/PRESENTATION/IMAGE/PRTINFO_BTN.PNG"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Cisco Xfinity XB3 Modem",
        'resources': [["/cmn/img/logo_title.png",92,30],["/cmn/img/icn_battery.png",9,114],["/cmn/img/icn_on_off.png",15,66],"/cmn/css/common-min.css","/cmn/css/print.css","/cmn/css/lib/jquery.radioswitch.css","/cmn/js/lang_en.js","/cmn/js/lib/jquery-1.9.1.js","/cmn/js/lib/jquery-migrate-1.2.1.js","/cmn/js/lib/jquery.validate.js","/cmn/js/lib/jquery.alerts.js","/cmn/js/lib/jquery.alerts.progress.js","/cmn/js/lib/jquery.ciscoExt.js","/cmn/js/lib/jquery.highContrastDetect.js","/cmn/js/lib/jquery.radioswitch.js","/cmn/js/lib/jquery.virtualDialog.js","/cmn/js/utilityFunctions.js","/cmn/js/comcast.js"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Brother HL-2150N series Printer",
        'resources': [["/pbio/brother.gif",144,52],["/printer/hl2150n.gif",144,16],["/printer/ball.gif",15,11],["/pbio/key_user.gif",24,11],["/pbio/bar_v.gif",24,1],["/pbio/bar_h.gif",24,1],["/pbio/key_admin.gif",24,11],["/printer/key_help.gif",36,39],["/printer/spacer.gif",1,1],["/pbio/model_s.gif",144,45],["/printer/dispLCD.gif",20,15],["/printer/noneLCD.gif",20,15],["/pbio/AutoRfOff.gif",80,50],["/printer/cot.gif",39,35],["/printer/loc.gif",39,35],"/printer/printer.css"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Brother HL-2250DN series Printer",
        'resources': [["/pbio/brother.gif",144,52],["/printer/hl2250dn.gif",144,16],["/printer/ball.gif",15,11],["/pbio/key_user.gif",24,11],["/pbio/bar_v.gif",24,1],["/pbio/bar_h.gif",24,1],["/pbio/key_admin.gif",24,11],["/printer/key_help.gif",36,39],["/printer/spacer.gif",1,1],["/pbio/model_s.gif",144,45],["/printer/noneLCD.gif",20,15],["/pbio/AutoRfOff.gif",80,50],["/printer/cot.gif",39,35],["/printer/loc.gif",39,35],"/printer/printer.css"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Cisco SPA504G IP Phone",
        'resources': [["/pageBackground.jpg",1260,1024],["/cisco_logo_header.png",62,33]],
        'callback': function( ip ) {
            // Insert exploit here
            //Found cisco_logo_header with different dimensions, 93*59 at County Market
        },
    },
    {
        'name': "GE Security 1809 Universal Interface",
        'resources': [["/images/gelogo.jpg",251,59],"/links.html",["/images/1809.jpg",560,349],"/home.html"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Denon CEOL Piccolo DRA-N5 Network Audio Player",
        'resources': ["/SETUP/formCssDefault.css","/SETUP/d_left_setup.asp","/goform/formCssDefault.css","/SETUP/d_right_setup.asp","/dummy.asp","/css/mainMenu.css"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "SIP-T41P IP Phone",
        'resources': [["/img/btn_bg_down.png",98,28],"/js/utility.js","/language/1.English.js"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "OpenWrt",
        'resources': ["/luci-static/bootstrap/cascade.css","/luci-static/bootstrap/mobile.css","/luci-static/resources/xhr.js",["/luci-static/resources/cbi/apply.gif",16,16],["/luci-static/resources/cbi/reset.gif",16,16]],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Cisco Small Business Switch",
        'resources': [["/images/cisco_pageBackground.jpg",1260,1024],["/images/cisco_logo_header.png",62,33],["/images/ContextMessageArrow_DownT.gif",16,16],["/images/login_progress.gif",16,16],["/images/normalHoverButton.gif",180,49],["/images/pressedButton.png",180,49],["/images/button_hover.png",1,22],["/images/button_pressed.png",1,22],["/images/cisco_button_hover-60.gif",60,24],["/images/cisco_button_normal-60.gif",60,24],["/images/cisco_button_pressed-60.gif",60,24],"/scripts/jquery.js","/scripts/jquery.cookie.js"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Thomson TG789vn Router",
        'resources': [["/images/home.gif",50,50],["/images/stxx__xl.gif",50,50],["/images/bbc__xl.gif",50,50],["/images/tbox__xl.gif",50,50],["/images/hnw___xl.gif",50,50],["/images/help.gif",50,50],["/images/spacer.gif",1,1],["/images/bull__md.gif",40,20],["/images/bbc_grxl.gif",50,50],["/images/iwla__la.gif",40,40],["/images/ieth__la.gif",40,40],["/images/ipho__la.gif",40,40],["/images/banner_back.gif",1,69],["/images/banner_left.gif",605,69],["/images/banner_right.gif",139,69],["/images/gradient.gif",1,38],"/styles.css","/util.js","/b_menu.js"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },
    {
        'name': "Huawei Home Gateway",
        'resources': ["/html/main/refresh.asp",["/images/logo.gif",55,54],["/images/language.gif",42,38],["/images/helpmain.gif",45,44],["/images/logout.gif",45,44],"/css/stylemain.css","/js/util.js","/js/tabinfo.js","/lang/logo.res","/html/main/logo.html",["/images/info.gif",46,44],["/images/basic.gif",46,44],["/images/advance.gif",46,44],["/images/maintain.gif",46,44],"/lang/device.res","/js/menutree.js","/js/adminmenu.js","/js/usermenu.js","/html/main/menu.asp","/html/main/tab.asp","/css/contentstyle.css","/html/status/deviceinfo.asp","/lang/footer.res","/html/main/footer.html",["/images/logoback.gif",2,68],["/images/leftblock.gif",18,68],["/images/midblock.gif",2,68],["/images/firstmenu.gif",2,45],["/images/rightblock.gif",19,68],["/images/tabbar.gif",2,4],["/images/clicktableft.gif",11,25],["/images/clicktabmid.gif",2,25],["/images/clicktabright.gif",11,25],["/images/loginleft.gif",7,197],["/images/loginmid.gif",2,197],["/images/loginright.gif",7,197],["/images/helpinit.gif",2,19],],
        'callback': function( ip ) {
            // Insert exploit here
            console.log("Found Huawei Home Gateway Device")

        },
    },
    {
        'name': "Cisco DPC3848V",
        'created': "Tue, 08 Sep 2015 00:02:50 GMT",
        'resources': [["/cmn/img/pageBackground.jpg",1260,566],["/cmn/img/cisco_logo.png",93,59],"/cmn/css/webframe.css","/cmn/js/lib/jquery-1.9.1.js","/cmn/js/lib/jquery-migrate-1.2.1.js","/cmn/js/utilityFunctions.js","/i18n/i18nReader.php"],
        'callback': function( ip ) {
            // Insert exploit here
        },
    },

]

var sonar = {
    'debug': false,
    'fingerprints': [],
    'scans': {},
    'websocket_timeout': 5000,
    'ip_queue': [], // Queue of IPs to scan

    /*
     * Start the exploit
     */
    'start': function(debug, interval_scan) {
        if( debug !== undefined ) {
          sonar.debug = true;
        }

        if( interval_scan === undefined ) {
            interval_scan = 1000;
        }

        if( sonar.fingerprints.length == 0 ) {
            return false;
        }

        // This calls sonar.process_queue() every 
        setInterval( function() {
            sonar.process_queue();
        }, interval_scan );

        sonar.enumerate_local_ips();
    },

    /*
     * Continually check if there are more IPs to be scanned and empty the queue as it fills
     */
    'process_queue': function() {

        //console.log("Checking ip: ")
        //var ip = "192.168.1.1"
        //sonar.identify_device(ip);
        
        for(  i = 0; i < 5; i++ ) {
            if( sonar.ip_queue.length > 0 ) {
                var tmp_ip = sonar.ip_queue.shift();
                //sonar.check_ip( tmp_ip );
                //instead check if live,
                //just do fingerprinting.
                sonar.identify_device(tmp_ip);
                //console.log("ip is: " + tmp_ip)
            }
        }
    },

    /*
     * Kicks off enumeration of devices (generating a unique id to keep track of the onload chain)
     */
    'identify_device': function( ip ) {
        var resource_list = [];
        //console.log(fingerprints)
        sonar.fingerprints.forEach( function( fingerprint, index, all ) {
            if( fingerprint.resources.length > 0 ) {
                var random_id = sonar.generate_random_id();
                sonar.scans[ random_id ] = {
                    'offset': 0,
                    'name': fingerprint.name,
                    'resources': fingerprint.resources,
                    'callback': fingerprint.callback,
                };
                //console.log("resources: " + fingerprint.resources)
                sonar.check_resource_exists( sonar.scans[ random_id ].resources[0], ip, random_id );
            }
        });
    },

    /*
     * This function keeps the records for what resources have been mapped to which hosts.
     */
    'internal_host_manager': function( ip, resource, id, otherProps, error ) {
        if( error ) {
            delete sonar.scans[ id ];
            return;
        }

        // If it's an image, check the dimensions
        if ( resource instanceof Array && otherProps.hasOwnProperty('width') ) {
            if (resource[1] != otherProps.width || resource[2] != otherProps.height) {
                delete sonar.scans[ id ];
                return;
            }
        }

        // If it's the last element then call it's callback.
        if( sonar.scans[ id ].resources[ sonar.scans[ id ].resources.length - 1 ] == resource ) {
            if( sonar.debug ) {
                //document.getElementById('result').innerHTML += '[DEBUG][' + id + '] Found "' + sonar.scans[ id ].name + '" at ' + ip + '\n';
                if (!document.getElementById('deviceType').innerHTML.includes(sonar.scans[id].name)) {   
                    document.getElementById('deviceType').innerHTML += 'Possible device ' + sonar.scans[id].name + ' found at ip ' + ip + '\n'
                }
                //alert( '[DEBUG][' + id + '] Found "' + sonar.scans[ id ].name + '" at ' + ip );
            }

            sonar.scans[ id ].callback( ip );
            delete sonar.scans[ id ];
            return;
        } else {
            sonar.scans[ id ].offset++;
            sonar.check_resource_exists( sonar.scans[ id ].resources[ sonar.scans[ id ].offset ], ip, id );
        }
    },

    /*
     * Browser fingerprints are loaded here
     *
     * Fingerprints are just arrays of resources such as images, css, and javascript that can be enumerated via external resource onload.
     * By checking for the existance of these resources we can identify routers and other internal devices and launch appropriate exploits.
     *
     * Example fingerprint data structure:
     * var fingerprints = [
     *  {
     *      'name': 'ASUS RT N66U Exploit',
     *      'resources': [ '/other.css' ],
     *      'callback': function( ip ),
     *  }
     * ]
     *
     */
    'load_fingerprints': function( fingerprints ) {
        sonar.fingerprints = fingerprints;
    },

    'ip_to_range': function( ip ) {
        var ip_parts = ip.split( '.' );
        if( ip_parts.length !== 4 ) {
            return false;
        }

        for( var i = 1; i < 255; i++ ) {
            var tmp_ip = ip_parts[0] + '.' + ip_parts[1] + '.' + ip_parts[2] + '.' + i;
            sonar.ip_queue.push( tmp_ip );
        }
    },

    /*
    *   Credit to lan-scan code found here: http://algorithm.dk/lanscan, WebSockets prove to be a fast way to enumerate live hosts!
    */
    'check_ip': function ( ip ){
        var done = false;
        var t1 = +new Date();
        var socket = new WebSocket("ws://" + ip + '/' + sonar.generate_random_id() );
        socket.onerror = function(e){
            if(e.timeStamp - t1 < 10){
                done = true;
                socket.close();
                setTimeout(function(){
                    sonar.check_ip( ip );
                }, sonar.websocket_timeout);
            }
            if(!done){
                done = true;
                socket.close();
                socket = null;
                sonar.identify_device(ip);
            }
        };
        socket.onclose = function(){
            if(!done){
                done = true;
                socket.close();
                socket = null;
                sonar.dead_ip(ip);
            }
        }
        socket.onopen = function(){
            if(!done){
                done = true;
                socket.close();
                socket = null;
                sonar.identify_device( ip );
            }
        }
        setTimeout(function(){
            if(!done){
                done = true;
                socket.close();
                socket = null;
                sonar.dead_ip( ip );
            }
        }, sonar.websocket_timeout);
    },

    'dead_ip': function( ip ) {
        //console.log( 'Dead IP', ip );
    },

    'enumerate_local_ips': function() {
        var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if (!RTCPeerConnection) return false;
        var addrs = Object.create(null);
        addrs['0.0.0.0'] = false;
        function addAddress(newAddr) {
            if (newAddr in addrs) return;
            addrs[newAddr] = true;
            //here is the ip added to the queue for processing. 
            sonar.ip_to_range(newAddr);
        }
        //sdp: session description protocol. give an ip range to start with
        function grepSDP(sdp) {
            console.log(sdp)
            var hosts = [];
            //depend on the session description, ips are added for processing. 
            sdp.split('\r\n').forEach(function (line) {
                if (~line.indexOf('a=candidate')) {
                    var parts = line.split(' '),
                        addr = parts[4],
                        type = parts[7];
                    if (type === 'host') addAddress(addr);
                } else if (~line.indexOf('c=')) {
                    var parts = line.split(' '),
                        addr = parts[2];
                    addAddress(addr);
                }
            });
        }
        var rtc = new RTCPeerConnection({iceServers:[]});
        rtc.createDataChannel('', {reliable:false});
        rtc.onicecandidate = function (evt) {
            if (evt.candidate) grepSDP('a='+evt.candidate.candidate);
        };
        console.log(rtc);
        //return true;
        setTimeout(function() {
            rtc.createOffer(function (offerDesc) {
                grepSDP(offerDesc.sdp);
                rtc.setLocalDescription(offerDesc);
                return true;
            }, function (e) {});
        }, 500);
        return true;
    },

    'generate_random_id': function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    },
    //walk the DOM and process the results.
    'processHTML': function() {
        //console.log("DOM is as follows: ")
        console.log(this.responseText);
        var data = this.responseText
        //there should be only one ip
        var fromURL = this.responseURL
        var ip = fromURL.match(/\/\/[\S\s]*\//)
        ip = ip[0].replace(/\//g, "")
        //console.log("IP: " + ip)
        //console.log("Resource FOUND: ")
        //add these to the results
        var arrayOfResource = data.match(/src=[\S]*\s/)
        arrayOfResource.forEach(function (item, index) {
            item = item.replace("src=", "")
            item = item.replace(/["]/g, "")
            //console.log(item);
            if (!document.getElementById('result').innerHTML.includes(item)) {   
                document.getElementById('result').innerHTML += item + " at " + ip + "\n"
            }
        });
        arrayOfResource = data.match(/href=[\S]*\s/)
        arrayOfResource.forEach(function (item, index) {
            item = item.replace("href=", "")
            item = item.replace(/["]/g, "")
            //console.log(item);
            if (!document.getElementById('result').innerHTML.includes(item)) {   
                document.getElementById('result').innerHTML += item + " at " + ip + "\n"
            }
        });

          
    },

    /*
     * Internal host fingerprinting via hooking onload and onerror. Even active content such as HTML pages and .js can be used here (as they are read via static iframes)
     */
    'check_resource_exists': function( resource, ip, id ) {
        var full_source = 'http://' + ip + ( resource instanceof Array ? resource[0] : resource );
        var element_id = sonar.generate_random_id();
        if( full_source.toLowerCase().endsWith( '.css' ) ) {
            var resourceref = document.createElement( "link" );
            resourceref.setAttribute( "id", element_id );
            resourceref.setAttribute( "type", "text/css" );
            resourceref.setAttribute( "rel", "stylesheet" );
            resourceref.setAttribute( "href", full_source );
        } else if ( full_source.toLowerCase().endsWith( '.png' ) || full_source.toLowerCase().endsWith( '.gif') || full_source.toLowerCase().endsWith( '.jpg' ) || full_source.toLowerCase().endsWith( '.tiff' ) ) {
            var resourceref = document.createElement( "img" );
            resourceref.setAttribute( "id", element_id );
            resourceref.setAttribute( "src", full_source );
        } else {
            var resourceref = document.createElement( "iframe" );
            resourceref.setAttribute( "id", element_id );
            resourceref.setAttribute( "src", full_source );
            resourceref.setAttribute( "sandbox", "" );
        }
        resourceref.addEventListener( "error", function( event ) {
            document.getElementById( element_id ).remove();
            sonar.internal_host_manager( ip, resource, id, null, true );
        }, false );

        resourceref.addEventListener( "load", function( event ) {
            var otherProps = {};
            if (resourceref.nodeName.toLowerCase() == 'img') {
                otherProps.width = resourceref.naturalWidth;
                otherProps.height = resourceref.naturalHeight;
            }
            var element = document.getElementById( element_id )
            element.remove();
            sonar.internal_host_manager( ip, resource, id, otherProps, false );
            //console.log("resource loaded: " + resource)
            if (!document.getElementById('result').innerHTML.includes(resource)) {   
                document.getElementById('result').innerHTML += resource + " at " + ip + "\n"
            }
            //sending get request for the DOM
            //console.log("sending GET to ip" + ip)
            xhr = new XMLHttpRequest();
            xhr.addEventListener("load", sonar.processHTML)
            xhr.open('GET', "http://" + ip + "/", true);
            xhr.send();
            
        }, false );
        
        var anotherelement = document.getElementsByTagName("head")[0].appendChild( resourceref );
        // console.log("Another Element")
        // console.log(anotherelement)
        // //if put internal_host manager call here, it will simply say found all the host
        // anotherelement.addEventListener("load", function(event){
        //     console.log("Another Element loaded")
        //     //alert( '[DEBUG][' + id + '] Found "' + sonar.scans[ id ].name + '" at ' + ip );
        //     sonar.scans[ id ].callback( ip );
        // }, false );

        // anotherelement.addEventListener("error", function(event){
        //     console.log("Another element error")
        //     sonar.internal_host_manager( ip, resource, id, null, true );
        // }, false );

    },


}

// sonar.js loading a fingerprint database from fingerprint_db.js
sonar.load_fingerprints( fingerprints );
// If 'true' is passed to the start() function sonar will run in debug mode. This causes an alert() on device enumeration.
sonar.start(false, 2000);

// Monkey patching JavaScript
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

