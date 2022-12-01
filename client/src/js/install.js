const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element

  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }  // Show prompt
  promptEvent.prompt();
  
  window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
   
  });

// TODO: Implement a click event handler on the `butInstall` element

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  console.log('👍', 'appinstalled', event);
});


