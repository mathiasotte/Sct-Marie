
// landing page JS ------------------------------------------

// JavaScript for modal funktionalitet
const openBtn = document.getElementById('valueBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('valueModalContainer');
const modal = document.getElementById('valueModal');



// åben modal
openBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
});

// Luk modal når man trykker på "X"
closeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

// luk modal når man klikker udenfor modal
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


  // desktop nav 
  
  const hamburgerToggle = document.getElementById("hamburgerToggle");
  const hamburgerClose = document.getElementById("hamburgerClose");
  const sideNav = document.getElementById("sideNav");
  
  hamburgerToggle.addEventListener("click", () => {
    sideNav.classList.remove("hidden");
    hamburgerToggle.style.display = "none";
    hamburgerClose.style.display = "inline";
  });
  
  hamburgerClose.addEventListener("click", () => {
    sideNav.classList.add("hidden");
    hamburgerToggle.style.display = "inline";
    hamburgerClose.style.display = "none";
  });

// landing page JS slut ------------------------------------------












