const emoji = require('node-emoji');

function emojiGenerator (newArray) {
    
    for( i = 0; i < newArray.length; i++) {
        console.log(emoji.get(newArray[i]));
    }
}

emojiGenerator(['coffee','pizza','smiley','heart', 'star', 'dog','cat','man','woman','bird']); 
