const comicIndex = document.getElementById( "middleContainer" )
            .getElementsByTagName( "a" )[10]
            .innerText.toString()
            .replace( "https://xkcd.com/", "" )
            .replace( "/", "" );

const explainButton = document.createElement( "li" );
explainButton.innerHTML = `<a href="https://explainxkcd.com/${comicIndex}" target="_blank">Explain!</a>`;

const topNavBar = document.getElementsByClassName( "comicNav" )[0];
topNavBar.insertBefore( explainButton, topNavBar.childNodes.item( 7 ) );
