const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base ${base} no es número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido para el limite ${limite} no es número`);
            return;
        }

        console.log('========================'.green);
        console.log(`==Tabla de ${base}==`.blue);
        console.log('========================'.green);

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(tabla);

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}