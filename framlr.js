        (function () {
            // Retrieve remote BrowserWindow
            const {BrowserWindow} = require('electron').remote

            function init() {

            // Move/deduplicate these into their own function >>
            var window = BrowserWindow.getFocusedWindow();
            if(window.isMaximized()){
		document.getElementById("wm-window").classList.remove("framed");
		document.getElementById("wm-window-title").classList.remove("framed");
            }else{
		document.getElementById("wm-window").classList.add("framed");
		document.getElementById("wm-window-title").classList.add("framed");
		//var element = document.getElementById('wm-window');
                //element.classList.add('framed');
            }
            
                    var window = BrowserWindow.getFocusedWindow();
                    if(window.isFullScreen()){
                        document.getElementById("maximize").classList.add("hidden");
			document.getElementById("fullscreen").classList.add("restore");
			document.getElementById("wm-window").classList.remove("framed");
		        document.getElementById("wm-window-title").classList.remove("framed");
                    }else{
                        document.getElementById("maximize").classList.remove("hidden");
			document.getElementById("fullscreen").classList.remove("restore");
			document.getElementById("wm-window").classList.add("framed");
		        document.getElementById("wm-window-title").classList.add("framed");
                    }
            // << Move/deduplicate these into their own function
                    
            
                // Minimize task
                document.getElementById("minimize").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    window.minimize();
                });

                // Maximize window
                document.getElementById("maximize").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    if(window.isMaximized()){
                        window.unmaximize();
			document.getElementById("maximize").classList.remove("restore");
			document.getElementById("wm-window").classList.add("framed");
		        document.getElementById("wm-window-title").classList.add("framed");
                    }else{
                        window.maximize();
			document.getElementById("maximize").classList.add("restore");
			document.getElementById("wm-window").classList.remove("framed");
		        document.getElementById("wm-window-title").classList.remove("framed");
                    }
                });
                
                // Toggle fullscreen
                document.getElementById("fullscreen").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    if(window.isFullScreen()){
                        //electron.remote.getCurrentWindow().setFullScreen(false);
                        window.setFullScreen(false);
                        document.getElementById("maximize").classList.remove("hidden");
			document.getElementById("fullscreen").classList.remove("restore");
			document.getElementById("wm-window").classList.add("framed");
		        document.getElementById("wm-window-title").classList.add("framed");
                    }else{
                        //electron.remote.getCurrentWindow().setFullScreen(true);
                        window.setFullScreen(true);
                        document.getElementById("maximize").classList.add("hidden");
			document.getElementById("fullscreen").classList.add("restore");
			document.getElementById("wm-window").classList.remove("framed");
		        document.getElementById("wm-window-title").classList.remove("framed");
                    }
                });

                // Close app
                document.getElementById("close").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    window.close();
                });
            };

            document.onreadystatechange =  () => {
                if (document.readyState == "complete") {
                    init();
                }
            };
        })();
