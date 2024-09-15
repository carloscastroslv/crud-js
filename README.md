# Comando para puxar do servidor para pasta local
    scp -r carlos@192.168.18.33:/var/www/html/crud-js/ C:\Users\Carlos\Documents\

# Comando para enviar da pasta local para o servidor 
    scp C:\Users\Carlos\Documents\teste\index.php carlos@192.168.18.33:/var/www/html/teste/

# Enviando usando o git
    git remote add origin https://github.com/carloscastroslv/crud-js.git
    git branch -M main
    git push -u origin main