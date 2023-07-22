let comicIndex;

/**
 * This chunk of code determines the current comic index.
 */

// Is this an archive page or the main page (latest comic)?
if ( window.location.href.replace( "https://xkcd.com/", "" ) == "" )
    comicIndex = document.getElementById( "middleContainer" )
            .getElementsByTagName( "a" )[10]
            .innerText.toString()
            .replace( "https://xkcd.com/", "" )
            .replace( "/", "" );
else comicIndex = window.location.href.replace( "https://xkcd.com/", "" ).replace( "/", "" );

// The comic index is not gettable on pages with special features
// e.g. 1939, with an extra <a> element linking to a full-size image
// when they are the latest comic (viewed on the root page)

/**
 * This bit adds the "Explain" button to the top navbar.
 */

const explainButton = document.createElement( "li" );
explainButton.innerHTML = `<a href="https://explainxkcd.com/${comicIndex}" target="_blank">Explain!</a>`;

const topNavBar = document.getElementsByClassName( "comicNav" )[0];
topNavBar.insertBefore( explainButton, topNavBar.childNodes.item( 7 ) );

/**
 * This adds a little input box to jump to a specific comic index.
 */
const middleContainer = document.getElementById( "middleContainer" );
const jumpBox = document.createElement( "ul" );
jumpBox.className = "comicNav";
jumpBox.innerHTML = `<li>Jump to index: <input type="number" id="jumpTargetInput" /></li><li><a onclick="jumpToComic();">Jump!</a></li>`;
middleContainer.insertBefore( jumpBox, middleContainer.childNodes.item( 4 ) );

function jumpToComic()
{
    window.open( `https://xkcd.com/${document.getElementById( "jumpTargetInput" ).value}` );
}