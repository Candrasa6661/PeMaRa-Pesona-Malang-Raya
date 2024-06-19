// login.js
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        // Lakukan proses login di sini, misalnya menggunakan AJAX
        $.ajax({
            type: 'POST',
            url: '/login',  // Sesuaikan dengan endpoint login di server.js
            data: { username: username, password: password },
            success: function(response) {
                alert('Login berhasil!');
                // Redirect ke halaman lain atau lakukan operasi sesuai kebutuhan
            },
            error: function(err) {
                alert('Login gagal! Periksa kembali username dan password.');
            }
        });
    });
});
