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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, puntosDeVida, danioMagico) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioMagico = danioMagico;
        _this.resistenciaMagica = 10;
        _this.invisibilidad = true;
        return _this;
    }
    Mago.prototype.atacar = function () {
        var habilidades = ["Bola de fuego", "Rayo", "Explosion"];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioMagico;
        if (i === 0) {
            danio += 10;
            this.fuego(danio);
        }
        else if (i === 1) {
            danio -= 5;
            this.rayo(danio);
        }
        else if (i === 2) {
            danio += 15;
            this.explosion(danio);
        }
    };
    Mago.prototype.fuego = function (danio) {
        console.log("".concat(this.nombre, " lanza una Bola de Fuego causando ").concat(danio, " de da\u00F1o."));
    };
    Mago.prototype.rayo = function (danio) {
        console.log("".concat(this.nombre, " lanza un Rayo causando ").concat(danio, " de da\u00F1o."));
    };
    Mago.prototype.explosion = function (danio) {
        console.log("".concat(this.nombre, " usa Curaci\u00F3n restaurando ").concat(danio, " puntos de vida."));
    };
    Mago.prototype.defender = function () {
        var habilidades = ["resistenciaMagica", "invisibilidad"];
        var i = Math.floor(Math.random() * habilidades.length);
        var defense = this.resistenciaMagica;
        if (i === 0) {
            defense += 30;
            this.puntosDeVida = this.puntosDeVida - defense;
            this.recibirDanio(defense);
        }
        else if (i === 1) {
            this.invisibilidad = true;
            this.recibirDanio(0);
        }
    };
    Mago.prototype.recibirDanio = function (defense) {
        if (this.resistenciaMagica) {
            console.log("".concat(this.nombre, " activo resistencia magica recibiendo ").concat(defense, " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.nombre, " activo invisibilidad no lo descubren"));
        }
    };
    return Mago;
}(personaje_1.personaje));
exports.Mago = Mago;
