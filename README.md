# Swap Background
*Swap Background is a jQuery plugin to automatically change the background image of an element based on screen size.*

## Instructions for Use:
*All parameters are optional* 

**There are two ways to define the background images:**
1. With an object passed to the plugin:
	* srcSm:
	* srcLrg:
2. With inline data attributes on the element.
	* data-sm=""
	* data-lg=""
3. You can also pass a mediaQuery parameter that defines at which screen size to swap out the images. The default size is 1023 meaning that the large image will show at 1024 and above and the small image will show at 1023 and below.
4. 
##### Full Examples:
```html
<div class="bannerMain"></div>
```
```javascript
$('.bannerMain').swapBackground({
    srcSm: '//placehold.it/600x300',
    srcLg: '//placehold.it/1900x500',
    mediaQuery: 800
});
```
----  or  ----
```html
<div class="bannerMain" data-lg="//placehold.it/1900x500" data-sm="//placehold.it/600x300"></div>
```
```javascript
$('.bannerMain').swapBackground({
    srcSm: '//placehold.it/600x300',
    srcLg: '//placehold.it/1900x500',
    mediaQuery: 800
});
```
