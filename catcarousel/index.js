/* 
1. Select the parent of the thumbnails.
2. Add event listener to parent
3. Event listener will change the src and alt tags of Hero
*/

'use strict';


$('.thumbnails').on('click', function(event) {
  // let targetSrcAttr = $(event.target).attr('src');
  // let targetAltAttr = $(event.target).attr('alt');
  let srcAttribute = $(this).find('img').attr('src');
  let altAttribute = $(this).find('img').attr('alt');
  // console.log(targetAltAttr);
  // console.log(targetSrcAttr);
  $('.hero img').attr('src',srcAttribute).attr('alt',altAttribute);
  
});