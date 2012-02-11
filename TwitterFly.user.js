// ==UserScript==
// @name           Improve Twitter Fly
// @version        1.0
// @namespace      xPaw
// @description    960px content, tweets on the left side
// @include        https://twitter.com/*
// @run-at         document-end
// ==/UserScript==

( function( ) {
	var AddStyles = function( css )
	{
		var node = document.createElement( 'style' );
		node.type = 'text/css';
		node.appendChild( document.createTextNode( css ) );
		
		document.getElementsByTagName( 'head' )[ 0 ].appendChild( node ); 
	};
	
	AddStyles(
		'.wrapper { width: 960px }' +
		'.wrapper-narrow, .wrapper-permalink { width: 630px }' +
		'.dashboard { float: right }' +
		'.content-main { float: left; width: 645px }'
	);
} )( );