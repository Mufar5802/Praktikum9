function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value === 'ahmad2017' && password.value === 'integrity') {
        window.location.href = 'login-sukses.html';   
    }
    else {
        document.write('Gagal Login. Silahkan Anda Coba Lagi')
    }
}