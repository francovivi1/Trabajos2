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
exports.LuchadorEvolucionado = void 0;
var luchador_1 = require("./luchador");
var LuchadorEvolucionado = /** @class */ (function (_super) {
    __extends(LuchadorEvolucionado, _super);
    function LuchadorEvolucionado(nombre, puntosDeVida, danioFisico) {
        return _super.call(this, nombre, puntosDeVida, danioFisico) || this;
    }
    LuchadorEvolucionado.prototype.golpePotenciado = function () {
        var danio = this.danioFisico + 40;
        console.log("".concat(this.nombre, " ha realizado un golpe potenciado causando ").concat(danio, " de da\u00F1o en \u00E1rea."));
    };
    LuchadorEvolucionado.prototype.atacar = function () {
        var habilidades = [
            "Golpe de punio",
            "Ataque",
            "Patada",
            "golpePotenciado",
        ];
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
        else if (i === 3) {
            this.golpePotenciado();
        }
    };
    return LuchadorEvolucionado;
}(luchador_1.Luchador));
exports.LuchadorEvolucionado = LuchadorEvolucionado;
