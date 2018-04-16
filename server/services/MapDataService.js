var AWS = require('aws-sdk');
var MapboxClient = require('mapbox');
var upload = require('mapbox-upload')
var http = require('http');
var fs = require('fs');
var stream = require('stream');

require('../config/config');     //instantiate configuration variables


// var client = new MapboxClient(CONFIG.mapbox_upload_token);

var options = {
    hostname: 'http://bostonopendata-boston.opendata.arcgis.com',
    path: '/datasets/962da9bb739f440ba33e746661921244_9.geojson',
    method: 'GET'
};

var file = fs.createWriteStream("parkingMeters.geojson")

var request = http.get( options, (response) => {
    response.pipe(file);
    file.on('finish', () => {
        // close() is async, call cb after close completes.
        file.close()
        // creates a progress-stream object to track status of
        // upload while upload continues in background
        var progress = upload({
            file: file.path, // Path to mbtiles file on disk.
            account: 'bradleyboutcher', // Mapbox user account.
            accesstoken: CONFIG.mapbox_upload_token, // A valid Mapbox API secret token with the uploads:write scope enabled.
            mapid: "", // The identifier of the map to create or update.
            name: 'My upload' // Optional name to set, otherwise a default such as original.geojson will be used.
        });

        progress.on('error', function(err){
            if (err) throw err;
        });

        progress.on('progress', function(p){
            // Do something with progress-stream object, like display upload status
        });

        progress.once('finished', function(){
            // Upload has completed but is likely queued for processing and not yet available on Mapbox.
        });

    });
})

/* client.createUploadCredentials( (err, credentials) => {
    // Use aws-sdk to stage the file on Amazon S3
    var s3 = new AWS.S3({
         accessKeyId: CONFIG.aws_access_key_id,
         secretAccessKey: CONFIG.aws_secret_access_key,
         region: 'us-east-1'
    });

    var file = fs.createWriteStream("parkingMeters.geojson")

    var request = http.get( options, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            // close() is async, call cb after close completes.
            file.close()

            s3.putObject({
                Bucket: myBucket,
                Key: myKey,
                Body: fs.createReadStream(file.path)
            },  
                (err, resp) => {
                console.log(resp)
            })
        });
    }).on('error', (err) => { // Handle errors
        if (err) console.log(err.message);
    });
      
    

  }); */
