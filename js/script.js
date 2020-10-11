$(() => {
  let addAdvantagesBlock = (classWrapper, title, text, link) => {
    $('<div>').appendTo('.advantages').addClass('advantages_item').addClass(classWrapper)
      .html(`<h3 class="advantages_item_title">${title}</h3>
              <p class="advantages_item_text">${text}</p>
              <a href="#" class="advantages_item_link">${link}
              <div class="advantages_item_link_array"></div>
              </a>`);
  };
  let text = {
    advantagesFirst: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and`,
    advantagesSecond: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups.`,
    advantagesThird: `Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration.`,
    promoFirst: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`,
    promoSecond: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  i ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.`
  };
  let classes = ['resources', 'training', 'connect', 'promo_first', 'promos_item_first_wrapper', 'promos_item_text_first', 'promo_second', 'promos_item_second_wrapper'];
  let titles = ['Resources', 'Training & Funding', 'Connect', 'track your', 'lifestyle', 'summer of fun'];
  let linksAndImg = ['Explore more', 'Browse training', 'Connect now', 'upload/fitness-1.jpg', 'upload/fitness-2.jpg'];

  addAdvantagesBlock(classes[0], titles[0], text.advantagesFirst, linksAndImg[0]);
  addAdvantagesBlock(classes[1], titles[1], text.advantagesSecond, linksAndImg[1]);
  addAdvantagesBlock(classes[2], titles[2], text.advantagesThird, linksAndImg[2]);

  let addPromoBlock = (classWrapper, srcImg, classItem, title1, title2, classText, text) => {
    $('<div>').appendTo('.promos').addClass('promos_item').addClass(classWrapper)
      .html(`<img src="${srcImg}" alt="Fitness_1">
       <div class="${classItem}">
         <h3 class="promos_item_title">${title1}</h3>
         <h2 class="promos_item_title_main">${title2}</h2>
         <p class="promos_item_text ${classText}">${text}</p>`)
  };
  addPromoBlock(classes[3], linksAndImg[3], classes[4], titles[3], titles[4], classes[5], text.promoFirst);
  addPromoBlock(classes[6], linksAndImg[4], classes[7], '', titles[5], '', text.promoSecond);

});


