    // Mark all as read
    document.getElementById('markAllRead').addEventListener('click', function () {
        const unreadNotifications = document.querySelectorAll('.notification.unread');
        unreadNotifications.forEach(notification => {
          notification.classList.remove('unread');
          notification.classList.add('read');
        });
      });
      
      // Show only unread notifications
      document.getElementById('showUnread').addEventListener('click', function () {
        const allNotifications = document.querySelectorAll('.notification');
        allNotifications.forEach(notification => {
          if (notification.classList.contains('unread')) {
            notification.style.display = 'block';
          } else {
            notification.style.display = 'none';
          }
        });
      });