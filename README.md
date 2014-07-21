# XKCD Ajax Lab

The [unofficial XKCD API](http://xkcd-unofficial-api.herokuapp.com/) returns JSON data about the XKCD web comic and allows for searching via parameters on multiple fields. It has [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled for cross-site requests (which many sites do not), making it ideal for this lab.

This API was developed by David Fisher and the [code is available on Github](https://github.com/tibbon/xkcd_api_unofficial).

## Assignment

Use jQuery and Ajax to create a page that makes requests to the XKCD API and shows the results on the page when various buttons are clicked. Buttons may include years, month names, or days of the month. When these are clicked, an Ajax request should be sent, and when you have results, they should render the XKCD comics to the page in some manner (list, images, etc).

## Bonus

Create an infinite scroller of XKCD comics for any of these result filters. There are required "limit" and "offset" parameters that you'll need to use; check the Rails code for details.
