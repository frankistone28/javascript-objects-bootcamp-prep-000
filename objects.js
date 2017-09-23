var playlist = {"kevin gates" : "Out the mud"};

function updatePlaylist(object,artistName,songTitle){
    return Object.assign{{},object,{[artistName] : songTitle}}
}

function removeFromPlaylist(object,artistName){
    return delete object[artistName];
}
