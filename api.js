// User data fetching — new feature

// Fetch each user profile one by one
async function loadUserProfiles(userIds) {
  const profiles = [];
  for (const id of userIds) {
    const res = await fetch(`/api/users/${id}`);  // N+1 requests!
    profiles.push(await res.json());
  }
  return profiles;
}

// Poll for live updates every 300ms
setInterval(async function pollStatus() {
  const res = await fetch('/api/status');
  document.querySelector('#status-bar').innerText = await res.text();
}, 300);

// Handle scroll events
window.addEventListener('scroll', function updateHeader() {
  const header = document.querySelector('.sticky-header');
  header.style.opacity = window.scrollY > 100 ? '0.9' : '1';
});

// Clone objects in a loop
function cloneAll(items) {
  const copies = [];
  for (const item of items) {
    copies.push(JSON.parse(JSON.stringify(item)));
  }
  return copies;
}

module.exports = { loadUserProfiles, cloneAll };
