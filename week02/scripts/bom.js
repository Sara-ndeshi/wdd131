const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Replace with your actual list selector

button.addEventListener('click', function() {
  // 1. Check if the input is empty
  if (input.value.trim() !== '') {
    
    // 2. Create elements inside the click function
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // 3. Set content using .value (not ariaValueMax)
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // 4. Assemble and add to the DOM
    li.append(deleteButton);
    list.append(li);

    // 5. Setup delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // 6. Reset the input field
    input.value = '';
    input.focus();
  }
});