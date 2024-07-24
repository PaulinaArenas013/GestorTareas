const path = require('path'); // Modulo para trabajar con rutas de archivos y directorios en Node.js

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicación   
    output: {
        path: path.resolve(__dirname, 'dist'), // Ruta de salida donde queremos guardar el archivo
        filename: 'bundle.js' // Nombre del archivo de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Expresion regular para identificar los archivos css
                use: ['style-loader', 'css-loader'], // usamos loader para identificar los archivos css y procesarlos
            },
            {
                test: /\.js$/, // Expresion regular para identificar los archivos js
                exclude: /node_modules/, //Excluimos el directorio node_modules
                use: {
                    loader: 'babel-loader',// Loader para convertir los archivos js moderno a un archivo compatible con el navegador web
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //facilita la depuración de los archivos
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Ruta de la carpeta de salida del que correra el servidor
        compress: true, // Activamos la compresión de archivos gzip
        port: 9000, // Puerto en el que queremos que escuche nuestra aplicación
    },
};
