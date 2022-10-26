// --- file form control ---

// --- Show Hiden Password Input ---
document.querySelector('#showHidden').addEventListener('click', () => {
    const input = document.querySelector('#password');

    if(input.type === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    };
});


// --- validation Form ---
document.querySelector('.form_login').addEventListener('submit', (event) => {
    event.preventDefault();

    // --- Data Form ---
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // --- validation Form ---
    if(username.length >= 8 && password.length >= 8) {

        var token_verification = 0;

        password.split('').forEach((elemnt) => {
            if(/^[0-9]+$/.test(elemnt)) {
                token_verification++
            };
        });
    };

    if(token_verification >= 1) {
        // --- Reset Verification ---
        var token_verification = 0;



    }else {
        document.querySelector('.container_error').style.display = 'block';
    };
    
});