const menuItems = document.querySelectorAll('.item');

// Add click event to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    menuItems.forEach(i => i.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');
  });
});