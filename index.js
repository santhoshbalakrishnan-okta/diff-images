var fs = require('fs'),
    oldScreenshots = './old',
    newScreenshots = './new';
    looksSame = require('looks-same');

fs.readdir(oldScreenshots, (err, files) => {
    files.forEach(file => {
        if(file.startsWith('.')) {
            return;
        }
        console.log('Reading file: ' + file);

        looksSame('old/' + file, 'new/' + file, function(error, equal) {
            if(!equal) {
                console.log(file + ' is not the same!');
                looksSame.createDiff({
                    reference: 'old/' + file,
                    current: 'new/' + file,
                    diff: 'diff/' + file,
                    highlightColor: '#ff0000', //color to highlight the differences
                    strict: false,
                }, function(error) {
                    console.log('Errors: ', error);
                    console.log('Done');
                });
            }
        });
    });
});