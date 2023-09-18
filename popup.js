const favouritesList = document.getElementById( "favourites_list" );

var favouritesData = "";

window.onload = loadFavourites();

function loadFavourites()
{
    // Read favourites from local storaeg
    //window.localStorage.getItem( "xkcd_favourites" ).split( ";" )
    // TODO: data read logic
    chrome.storage.sync.get( ["xkcd_favourites"] ).then( readFavourites );
    
    favouritesList.innerHTML += `<li>test</li>`;
}

function readFavourites( str )
{

}
