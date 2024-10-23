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
exports.MagoEvolucionado = void 0;
var mago_1 = require("./mago");
var MagoEvolucionado = /** @class */ (function (_super) {
    __extends(MagoEvolucionado, _super);
    function MagoEvolucionado(nombre, puntosDeVida, danioMagico) {
        return _super.call(this, nombre, puntosDeVida, danioMagico) || this;
    }
    MagoEvolucionado.prototype.hechizoPotenciado = function () {
        var danio = this.danioMagico + 40;
        console.log("".concat(this.nombre, " ha realizado un hechizo potenciado ").concat(danio, " de da\u00F1o en \u00E1rea."));
    };
    MagoEvolucionado.prototype.atacar = function () {
        var habilidades = [
            "Bola de fuego",
            "Rayo",
            "Explosion",
            "Hechizo potenciado",
        ];
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
        else if (i === 3) {
            this.hechizoPotenciado();
        }
    };
    return MagoEvolucionado;
}(mago_1.Mago));
exports.MagoEvolucionado = MagoEvolucionado;
