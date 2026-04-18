// Service Worker for Learning Schedule Push Notifications
const CACHE_NAME = 'learning-schedule-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle push notification received
self.addEventListener('push', (event) => {
  let data = { title: 'Learning Reminder 📚', body: 'Time to study!' };
  
  if (event.data) {
    try {
      data = JSON.parse(event.data.text());
    } catch (e) {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Learning Reminder 📚', {
      body: data.body || 'Your study session is ready!',
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'learning-reminder',
      requireInteraction: true,
      actions: [
        { action: 'open', title: '📖 Open App' },
        { action: 'dismiss', title: 'Dismiss' }
      ]
    })
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});
