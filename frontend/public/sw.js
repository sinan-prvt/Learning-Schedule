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
  console.log('[Service Worker] Push Received.');
  let data = { title: 'Study Reminder 📚', body: 'Time to level up your skills!' };
  
  if (event.data) {
    try {
      data = JSON.parse(event.data.text());
      console.log('[Service Worker] Payload:', data);
    } catch (e) {
      data.body = event.data.text();
      console.log('[Service Worker] Text Payload:', data.body);
    }
  }

  const options = {
    body: data.body || 'Your next study session is ready.',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    tag: 'learning-reminder',
    renotify: true,
    requireInteraction: true,
    vibrate: [100, 50, 100],
    actions: [
      { action: 'open', title: '📖 Open App' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Study Reminder 📚', options)
      .then(() => console.log('[Service Worker] Notification shown.'))
      .catch(err => console.error('[Service Worker] Error showing notification:', err))
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
