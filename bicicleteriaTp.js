"use strict";
exports.__esModule = true;
var fs = require("fs");
var cli = require("cli-chart");
var Bicicleteria = /** @class */ (function () {
    function Bicicleteria(bicicletas, stockTotal, stockModelo) {
        this.stockTotal = 42;
        this.stockModelo = 2;
        this.bicicletas = bicicletas;
        this.stockTotal = stockTotal;
        this.stockModelo = stockModelo;
    }
    Bicicleteria.prototype.getventasMesAño2019 = function () {
        var chart = new cli({
            xlabel: 'ventasPorMes2019',
            ylabel: 'cantidad',
            direction: 'y',
            height: 20,
            width: 80,
            lmargin: 10,
            step: 6
        });
        chart.addBar(30, 'red');
        chart.addBar(33, 'yellow').addBar(25, 'red').addBar(38, 'green').addBar(42, 'green').addBar(39, 'green').addBar(35, 'yellow').addBar(28, 'red').addBar(30, 'red').addBar(36, 'yellow').addBar(40, 'green').addBar(34, 'yellow');
        chart.draw();
    };
    Bicicleteria.prototype.getbicicleta = function () {
        return this.bicicletas;
    };
    return Bicicleteria;
}());
var Bicicletas = /** @class */ (function () {
    function Bicicletas(marca, modelo, precio, cuadro, rodado) {
        this.archivoMarcas = fs.readFileSync('marcas.txt', 'utf-8');
        this.marca = this.archivoMarcas.split(', ');
        this.archivoModelos = fs.readFileSync('modelos.txt', 'utf-8');
        this.modelo = this.archivoModelos.split(', ');
        this.archivoPrecios = fs.readFileSync('precios.txt', 'utf-8');
        this.precio = this.archivoPrecios.split(', ');
        this.archivoCuadros = fs.readFileSync('cuadros.txt', 'utf-8');
        this.cuadro = this.archivoCuadros.split(' ');
        this.archivoRodados = fs.readFileSync('rodados.txt', 'utf-8');
        this.rodado = this.archivoRodados.split(' ');
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cuadro = cuadro;
        this.rodado = rodado;
    }
    Bicicletas.prototype.getMarca = function (marca) {
        return this.marca;
    };
    Bicicletas.prototype.getModelo = function (modelo) {
        for (var i = 0; i < this.modelo.length; i++) {
            console.log(this.modelo[i]);
        }
    };
    Bicicletas.prototype.getPrecio = function (precio) {
        return this.precio;
    };
    Bicicletas.prototype.getCuadro = function () {
        return this.cuadro;
    };
    Bicicletas.prototype.getRodado = function () {
        return this.rodado;
    };
    return Bicicletas;
}());
var bicicletas;
var stockTotal;
var stockModelo;
var modelo;
var miBicicleteria = new Bicicleteria(bicicletas, stockTotal, stockModelo);
miBicicleteria.getventasMesAño2019();
miBicicleteria.getbicicleta().getModelo(modelo);
console.log(miBicicleteria);
