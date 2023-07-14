var Stream = require('node-rtsp-stream')
var stream = new Stream({
    name: 'socket',
    streamUrl: 'rtsp://192.168.137.12/live/main_stream',
    wsPort: 9990,
    ffmpegOptions:{
        '-stats': '',
        '-r': 20,
        '-s': '1920 1080'
    }
})