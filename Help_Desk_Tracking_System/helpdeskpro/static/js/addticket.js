   // Drag and Drop Image Upload Script
   const dropArea = document.getElementById('drag-drop-area');
   const imageInput = document.getElementById('imageInput');
   const thumbnailDisplay = document.getElementById('thumbnailDisplay');

   dropArea.addEventListener('click', () => imageInput.click());

   dropArea.addEventListener('dragover', (e) => {
       e.preventDefault();
       dropArea.style.backgroundColor = '#e3e3e3';
   });

   dropArea.addEventListener('dragleave', () => {
       dropArea.style.backgroundColor = '#f9f9f9';
   });

   dropArea.addEventListener('drop', (e) => {
       e.preventDefault();
       dropArea.style.backgroundColor = '#f9f9f9';
       const files = e.dataTransfer.files;
       displayThumbnails(files);
   });

   imageInput.addEventListener('change', (e) => {
       const files = e.target.files;
       displayThumbnails(files);
   });

   function displayThumbnails(files) {
       Array.from(files).forEach(file => {
           if (file.type.startsWith('image/')) {
               const reader = new FileReader();
               reader.onload = (event) => {
                   const thumbnail = document.createElement('div');
                   thumbnail.classList.add('thumbnail');
                   thumbnail.innerHTML = `<img src="${event.target.result}" alt="${file.name}">`;
                   thumbnailDisplay.appendChild(thumbnail);
               };
               reader.readAsDataURL(file);
           } else {
               alert('Only image files are allowed!');
           }
       });
   }

   // ticketsidebar for recently opened and reopen tickets //


   document.addEventListener("DOMContentLoaded", () => {
       const recentlyOpenedBtn = document.getElementById("recently-opened");
       const reopenTicketBtn = document.getElementById("reopen-ticket");
       const recentTicketsSection = document.getElementById("recent-tickets");
       const reopenSection = document.getElementById("reopen-section");

       // Initially, show the recently opened section
       recentTicketsSection.style.display = "block";
       reopenSection.style.display = "none";

       // Show recently opened tickets section when button is clicked
       recentlyOpenedBtn.addEventListener("click", () => {
           recentTicketsSection.style.display = "block";
           reopenSection.style.display = "none";
       });

       // Show reopen ticket section when button is clicked
       reopenTicketBtn.addEventListener("click", () => {
           reopenSection.style.display = "block";
           recentTicketsSection.style.display = "none";
       });

       // Reopen ticket button logic
       const reopenBtn = document.getElementById("reopen-btn");
       reopenBtn.addEventListener("click", () => {
           const ticketId = document.getElementById("ticket-id").value.trim();
           if (ticketId) {
               alert(`Ticket #${ticketId} has been reopened!`);
               document.getElementById("ticket-id").value = ""; // Reset the input field
           } else {
               alert("Please enter a valid ticket ID.");
           }
       });
   });

   // ticket submission alert//

   document.querySelector('form').addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent form submission
       alert('Your ticket has been submitted successfully!');
       });