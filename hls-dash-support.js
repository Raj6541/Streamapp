'use strict';

```
// HLS/DASH Streaming Support

class HLSDASHSupport {
    constructor() {
        this.isHLSSupported = this.checkHLSSupport();
        this.isDASHSupported = this.checkDASHSupport();
    }

    checkHLSSupport() {
        // Check if the browser supports HLS
        return typeof Hls !== 'undefined';
    }

    checkDASHSupport() {
        // Check if the browser supports DASH
        return !!window.MediaSource;
    }

    loadStream(url) {
        if (this.isHLSSupported) {
            const video = document.getElementById('video');
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
        } else if (this.isDASHSupported) {
            const video = document.getElementById('video');
            const dash = dashjs.MediaPlayer().create();
            dash.initialize(video, url, true);
        } else {
            console.error('HLS or DASH is not supported in this browser.');
        }
    }
}

// Instantiation Example
const streamingSupport = new HLSDASHSupport();
streamingSupport.loadStream('path/to/stream');
```
