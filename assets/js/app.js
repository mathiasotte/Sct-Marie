
// landing page JS ------------------------------------------

  // mobil nav 

 // Henter hamburger-knappen fra DOM'en og gemmer den i en variabel
 const hamburgerBtn = document.getElementById("hamburgerBtn");

 // Henter mobilmenu-elementet fra DOM'en og gemmer det i en variabel
 const mobileMenu = document.getElementById("mobileMenu");
 
 // Tilføjer en klik-event til hamburger-knappen
 hamburgerBtn.addEventListener("click", () => {
   // Når der klikkes: toggler klassen "open" på knappen for at animere ikonet
   hamburgerBtn.classList.toggle("open");
 
   // Toggler også klassen "open" på menuen for at åbne eller lukke den med transition
   mobileMenu.classList.toggle("open");
 });

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


// landing page JS slut ------------------------------------------












