//your JS code here. If required.
const modal = document.querySelector('.modal');
        const openModalBtn = document.querySelector('#openModal');
        const closeModalBtn = document.querySelector('.close-modal');

        // Open modal
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // Close modal when clicking close button
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });