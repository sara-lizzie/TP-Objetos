import * as fs from 'fs';
import * as cli from 'cli-chart';
class Bicicleteria {
    private bicicletas: Bicicletas;
    private stockTotal: number = 42;
    private stockModelo: number = 2;

    public constructor(bicicletas: Bicicletas, stockTotal: number, stockModelo: number){
        this.bicicletas = bicicletas;
        this.stockTotal = stockTotal;
        this.stockModelo = stockModelo;
    }

    public getventasMesAño2019(){
        let chart = new cli({
            xlabel: 'ventasPorMes2019',
            ylabel: 'cantidad',
            direction: 'y',
            height: 20,
            width: 80,
            lmargin: 10,
            step: 6,
        });
        
        chart.addBar(30,'red');
        chart.addBar(33,'yellow').addBar(25,'red').addBar(38,'green').addBar(42,'green').addBar(39,'green').addBar(35,'yellow').addBar(28,'red').addBar(30,'red').addBar(36,'yellow').addBar(40,'green').addBar(34,'yellow');
        chart.draw();
    }
    public getbicicleta ():Bicicletas{
       return this.bicicletas;
    }
}    

class Bicicletas {
    private archivoMarcas = fs.readFileSync('marcas.txt','utf-8');
    private marca:string[] = this.archivoMarcas.split(', ');
    private archivoModelos = fs.readFileSync('modelos.txt','utf-8');
    private modelo:string[] = this.archivoModelos.split(', ');
    private archivoPrecios = fs.readFileSync('precios.txt','utf-8');
    private precio:string[] = this.archivoPrecios.split(', ');
    private archivoCuadros = fs.readFileSync('cuadros.txt','utf-8');
    private cuadro:string[] = this.archivoCuadros.split(' ');
    private archivoRodados = fs.readFileSync('rodados.txt','utf-8');
    private rodado:string[] = this.archivoRodados.split(' ');

    public constructor(marca: string[], modelo: string[], precio: string[], cuadro: string[], rodado: string[]){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cuadro = cuadro;
        this.rodado = rodado;
    }

    public getMarca(marca:string[]):string[]{
        return this.marca;
    }

    public getModelo(modelo:string[]):void{
        for(let i:number=0;i<this.modelo.length;i++){
            console.log(this.modelo[i]); 
        }
    }
    public getPrecio(precio:string[]):string[]{
        return this.precio;
    }    
    public getCuadro():string[]{
        return this.cuadro;
    }
    public getRodado():string[]{
        return this.rodado;
    }
}
let bicicletas: Bicicletas;
let stockTotal: number;
let stockModelo: number;
let modelo:string[];
let miBicicleteria = new Bicicleteria(bicicletas, stockTotal, stockModelo);
miBicicleteria.getventasMesAño2019();
miBicicleteria.getbicicleta().getModelo(modelo);

console.log(miBicicleteria);

