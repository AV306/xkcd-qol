const favouritesList = document.getElementById( "favourites_list" );

window.onload = loadFavourites();

function loadFavourites()
{
    // Read favourites from local storaeg
    //window.localStorage.getItem( "xkcd_favourites" ).split( ";" )
    // TODO: data read logic
    chrome.storage.sync.get( "xkcd_favourites" ).then( (value) => { console.log( value instanceof Array ); }, null );
    favouritesList.innerHTML += `<li>test</li>`;
}