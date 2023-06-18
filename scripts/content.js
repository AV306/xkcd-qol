let comicIndex;

// Is this an archive page or the main page (latest comic)?
if ( window.location.href.replace( "https://xkcd.com/", "" ) == "" )
    comicIndex = document.getElementById( "middleContainer" )
            .getElementsByTagName( "a" )[10]
            .innerText.toString()
            .replace( "https://xkcd.com/", "" )
            .replace( "/", "" );
else comicIndex = window.location.href.replace( "https://xkcd.com/", "" ).replace( "/", "" );

// The comic index is not be get-able on pages with special features
// e.g. 1939, with an extra <a> element linking to a full-size image
// when they are the latest comic (viewed on the root page)

const explainButton = document.createElement( "li" );
explainButton.innerHTML = `<a href="https://explainxkcd.com/${comicIndex}" target="_blank">Explain!</a>`;

const topNavBar = document.getElementsByClassName( "comicNav" )[0];
topNavBar.insertBefore( explainButton, topNavBar.childNodes.item( 7 ) );
