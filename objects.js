var playlist = {"kevin gates" : "Out the mud"};

function updatePlaylist(object,artistName,songTitle){
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist(object,artistName){
    return delete object[artistName];
}
