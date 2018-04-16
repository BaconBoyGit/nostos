var AWS = require('aws-sdk');
var MapboxClient = require('mapbox');
var upload = require('mapbox-upload')
var http = require('http');
var fs = require('fs');
var path = require('path');
var stream = require('stream');

require('../config/config');     //instantiate configuration variables

// Location of parking meter geojson data
var parkingOptions = {
    hostname: 'http://bostonopendata-boston.opendata.arcgis.com',
    path: '/datasets/962da9bb739f440ba33e746661921244_9.geojson',
    method: 'GET'
};

var parkingData = fs.createWriteStream("parkingMeters.geojson", { flag: 'w'}, function (err) {
    if (err) throw err;
    console.log("File Opened")
})

// Location of zip code boundary geojson data
var zipOptions = {
    hostname: 'http://bostonopendata-boston.opendata.arcgis.com',
    path: '/datasets/53ea466a189b4f43b3dfb7b38fa7f3b6_1.geojson',
    method: 'GET'
};

var zipData = fs.createWriteStream("zipCodes.geojson", { flag: 'w'}, function (err) {
    if (err) throw err;
    console.log("File Opened")
})

// Create an array of upload data to iterate through
var uploadData = {
    1: { options: parkingOptions, data: parkingData},
    2: { options: zipOptions, data: zipData}
}

// A function for uploading using the mpabox uploading api
function uploadGeoJson ( data, options )  {
    http.get( options, (response) => {
        response.pipe(data);

        data.on('finish', () => {
            // close() is async, call cb after close completes.
            data.close()
            // creates a progress-stream object to track status of
            // upload while upload continues in background
            var progress = upload({
                file: data.path, // Path to mbtiles file on disk.
                account: 'bradleyboutcher', // Mapbox user account.
                accesstoken: CONFIG.mapbox_upload_token, // A valid Mapbox API secret token with the uploads:write scope enabled.
                mapid: "bradleyboutcher." + path.basename(data.path, '.geojson'), // The identifier of the map to create or update.
                name: path.basename(data.path, '.geojson') // Optional name to set, otherwise a default such as original.geojson will be used.
            });

            progress.on('error', function(err){
                if (err) throw err;
            });

            progress.on('progress', function(p){
                console.log(p.percentage + "%") 
            });

            progress.once('finished', function(){
                console.log('Finished!')
            });

        });
    })
}

// Commence uploads
uploadGeoJson(zipData, zipOptions)
uploadGeoJson(parkingData, parkingOptions)

