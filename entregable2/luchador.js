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
exports.Luchador = void 0;
var personaje_1 = require("./personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosDeVida, daniofisico) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioFisico = daniofisico;
        _this.resistenciaFisica = 0;
        _this.indefenso = false;
        return _this;
    }
    Luchador.prototype.atacar = function () {
        var habilidades = ["Golpe de punio", "Ataque", "Patada"];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioFisico;
        if (i === 0) {
            danio += 20;
            this.golpeDePunio(danio);
        }
        else if (i === 1) {
            danio += 15;
            this.ataque(danio);
        }
        else if (i === 2) {
            danio -= 10;
            this.patada(danio);
        }
    };
    Luchador.prototype.golpeDePunio = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado su golpe de pu\u00F1o ").concat(danio, " de da\u00F1o."));
    };
    Luchador.prototype.ataque = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado su ataque definitivo ").concat(danio, " de da\u00F1o."));
    };
    Luchador.prototype.patada = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado una patada ").concat(danio, " de da\u00F1o."));
    };
    Luchador.prototype.defender = function () {
        var habilidades = ["Escudo", "Cuerpo tierra", "pocion regenerativa"];
        var i = Math.floor(Math.random() * habilidades.length);
        var defense = this.resistenciaFisica;
        if (i === 0) {
            defense += 30;
            this.puntosDeVida = this.puntosDeVida - defense;
            this.recibirDanio(defense, i);
        }
        else if (i === 1) {
            defense += 15;
            this.puntosDeVida = this.puntosDeVida - defense;
            this.recibirDanio(defense, i);
        }
        else if (i === 2) {
            defense += 5;
            this.puntosDeVida = this.puntosDeVida - defense;
            this.recibirDanio(defense, i);
        }
    };
    Luchador.prototype.recibirDanio = function (defense, i) {
        if (this.indefenso === false && i === 0) {
            console.log("".concat(this.nombre, " ha activado su bloqueo con escudo recibiendo ").concat(defense, " de da\u00F1o."));
        }
        else if (this.indefenso === false && i === 1) {
            console.log("".concat(this.nombre, " ha echo cuerpo tierra ").concat(defense, " de escape."));
        }
        else if (i === 2) {
            console.log("".concat(this.nombre, " ha tomado una pocion regenerativa, curando puntos de vida."));
        }
    };
    return Luchador;
}(personaje_1.personaje));
exports.Luchador = Luchador;
