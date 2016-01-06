var views;
var swiftsnapper;
(function (swiftsnapper) {
    "use strict";
    var CameraManager;
    (function (CameraManager) {
        function initialize() {
            navigator['mediaDevices'].getUserMedia({
                video: {
                    facingMode: "user"
                }
            }).then(function (stream) {
                var video = document.getElementById('CameraPreview');
                video['srcObject'] = stream;
            }).catch(function (error) {
                console.log(error.name + ": " + error.message);
            });
        }
        CameraManager.initialize = initialize;
    })(CameraManager = swiftsnapper.CameraManager || (swiftsnapper.CameraManager = {}));
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            CameraManager.initialize();
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            CameraManager.initialize();
        }
    })(Application = swiftsnapper.Application || (swiftsnapper.Application = {}));
    window.onload = function () {
        Application.initialize();
        //Init Owl Carousel
        views = $('#views');
        views.owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            video: true,
            margin: 0,
            startPosition: 1,
            pullDrag: false,
            fallbackEasing: 'easeInOutQuart',
            responsive: {
                0: {
                    items: 1
                },
                1024: {
                    items: 3
                }
            }
        });
        $('#ViewSnapsBtn').on('click tap', function () {
            views.trigger('prev.owl.carousel', [300]);
        });
        $('#ViewStoriesBtn').on('click tap', function () {
            views.trigger('next.owl.carousel', [300]);
        });
    };
})(swiftsnapper || (swiftsnapper = {}));
//# sourceMappingURL=app.js.map