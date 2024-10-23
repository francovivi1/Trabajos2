"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, danioDistancia) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioDistancia = danioDistancia;
        _this.resistenciaEscudo = 0;
        _this.endeble = false;
        return _this;
    }
    Arquero.prototype.atacar = function () {
        var habilidades = [
            "Disparo preciso",
            "Disparo explosivo",
            "Disparo de hielo",
        ];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioDistancia;
        if (i === 0) {
            danio += 20;
            this.disparoPreciso(danio);
        }
        else if (i === 1) {
            danio += 25;
            this.disparoExplosivo(danio);
        }
        else if (i === 2) {
            danio -= 10;
            this.disparoDeHielo(danio);
        }
    };
    Arquero.prototype.disparoPreciso = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un disparo preciso causando ").concat(danio, " de da\u00F1o."));
    };
    Arquero.prototype.disparoExplosivo = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un disparo explosivo causando ").concat(danio, " de da\u00F1o."));
    };
    Arquero.prototype.disparoDeHielo = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un disparo congelante ").concat(danio, " de da\u00F1o."));
    };
    Arquero.prototype.defender = function () {
        var habilidades = ["miradaDeAguila", "Camuflaje", "barreraDeFlecha"];
        var i = Math.floor(Math.random() * habilidades.length);
        var defense = this.resistenciaEscudo;
        if (i === 0) {
            defense += 20;
            this.puntosDeVida = this.puntosDeVida - defense;
            this.recibirDanio(0, i);
        }
        else if (i === 1) {
            this.recibirDanio(0, i);
        }
    };
    Arquero.prototype.recibirDanio = function (defense, i) {
        if (this.endeble === false && i === 0) {
            console.log("".concat(this.nombre, " ha activado su mirada de aguila ").concat(defense, " de da\u00F1o."));
        }
        else if (this.endeble === true && i === 1) {
            console.log("".concat(this.nombre, " se ha puesto en modo camuflaje recibiendo ").concat(defense, " de da\u00F1o."));
        }
        else if (i === 2) {
            console.log("".concat(this.nombre, " ha realizado una barrera de flecha, recibiendo ").concat(defense, " de da\u00F1o."));
        }
    };
    return Arquero;
}(personaje_1.personaje));
exports.Arquero = Arquero;
