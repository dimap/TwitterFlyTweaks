// ==UserScript==
// @name           Improve Twitter Fly
// @version        1.0
// @namespace      xPaw
// @description    960px content, tweets on the left side
// @match          https://twitter.com/*
// @run-at         document-end
// ==/UserScript==

var TWITTER_PAGE_WIDTH = 932;

var AddStyles = function( css )
{
	var node = document.createElement( 'style' );
	node.type = 'text/css';
	node.appendChild( document.createTextNode( css ) );
	
	document.getElementsByTagName( 'head' )[ 0 ].appendChild( node );
};

AddStyles(
	'.wrapper { width: ' + TWITTER_PAGE_WIDTH + 'px }' +
	'.wrapper-narrow, .wrapper-permalink { width: 630px }' +
	'.dashboard { float: right }' +
	'.content-main { float: left; width: ' + ( TWITTER_PAGE_WIDTH - 315 ) + 'px }'
);