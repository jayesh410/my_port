function scrollServices(direction) {
  const container = document.getElementById("servicesContainer");
  
  // Get the width of one card plus the gap (margin)
  const card = container.querySelector('.service-box');
  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseInt(style.marginRight || 20);

  // Scroll by the width of 4 cards
  const scrollAmount = cardWidth * 4;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
