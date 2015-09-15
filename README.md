# hapi-versioning
-----------------

##Version handling for Hapi.js
When version set inside the header it will add it to the route for ex'

header: { version: v1 }
url: /hello/world

will convert to
url: /v1/hello/world

When
	header: { version: v2 }
	url: /v1/hello/world
it
	will redirect to /v1/hello/world
** url will override the header all the time
