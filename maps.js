function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value ==='Admin') {
            admins.push(key)
        }
        return admins;
    }
};

const usuarios = new Map();

usuarios.set('Jaqueline', 'Admin');
usuarios.set('Jacques', 'Admin');
usuarios.set('Larissa', 'User');
usuarios.set('Ellen', 'Admin');

console.log(getAdmins(usuarios));