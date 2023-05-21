window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY;
  
    if (scrolled > 0 || document.querySelector('.navbar-collapse.show')) {
      navbar.classList.add('solid-navbar');
      navbar.classList.remove('transparent-navbar');
    } else {
      navbar.classList.remove('solid-navbar');
      navbar.classList.add('transparent-navbar');
    }
  });
  
  document.querySelector('#hamburger-btn').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
  
    if (navbar.classList.contains('solid-navbar')) {
      navbar.classList.remove('solid-navbar');
    } else {
      navbar.classList.add('solid-navbar');
    }
  });
  
  // Add slide effect to the "FEATURED COLLECTIONS" heading
  const featuredCollectionsHeading = document.getElementById('featured-collections');
  const slideDuration = 1000;

  // Slide the heading from left to right
  featuredCollectionsHeading.style.position = 'relative';
  featuredCollectionsHeading.style.left = '-100%';
  featuredCollectionsHeading.style.opacity = '0';

  setTimeout(() => {
      featuredCollectionsHeading.style.transition = `left ${slideDuration / 1000}s ease-in-out, opacity ${slideDuration / 1000}s ease-in-out`;
      featuredCollectionsHeading.style.left = '0';
      featuredCollectionsHeading.style.opacity = '1';
  }, 100);

  // Add slide effect to the card elements
  const cardElements = document.querySelectorAll('.card');
  const slideDurations = 1000;

  cardElements.forEach((card, index) => {
      // Slide each card element from top to bottom
      card.style.position = 'relative';
      card.style.top = '-100px';
      card.style.opacity = '0';

      setTimeout(() => {
          card.style.transition = `top ${slideDuration / 1000}s ease-in-out, opacity ${slideDuration / 1000}s ease-in-out`;
          card.style.top = '0';
          card.style.opacity = '1';
      }, 500 + (index * 200));
  });

   // Slide-in effect from the right for the heading element
   const headingElement = document.getElementById('flava-puff');
   const slideDurationz = 1000;

   headingElement.style.position = 'relative';
   headingElement.style.left = '100%';
   headingElement.style.opacity = '0';

   setTimeout(() => {
       headingElement.style.transition = `left ${slideDuration / 1000}s ease-in-out, opacity ${slideDuration / 1000}s ease-in-out`;
       headingElement.style.left = '0';
       headingElement.style.opacity = '1';
   }, 500);