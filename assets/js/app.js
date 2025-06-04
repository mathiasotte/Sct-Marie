
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


// landing page JS ------------------------------------------


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

// FAQ side ------------------------------------------


// kontakt side ------------------------------------------

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






