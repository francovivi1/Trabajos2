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
exports.ArqueroEvolucionado = void 0;
var arquero_1 = require("./arquero");
var ArqueroEvolucionado = /** @class */ (function (_super) {
    __extends(ArqueroEvolucionado, _super);
    function ArqueroEvolucionado(nombre, puntosDeVida, danioDistancia) {
        return _super.call(this, nombre, puntosDeVida, danioDistancia) || this;
    }
    ArqueroEvolucionado.prototype.disparoPotenciado = function () {
        var danio = this.danioDistancia + 40;
        console.log("".concat(this.nombre, " ha disparado una flecha potenciada causando ").concat(danio, " de da\u00F1o en \u00E1rea."));
    };
    ArqueroEvolucionado.prototype.atacar = function () {
        var habilidades = [
            "Disparo preciso",
            "Disparo explosivo",
            "Disparo de hielo",
            "Disparo potenciado",
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
        else if (i === 3) {
            this.disparoPotenciado();
        }
    };
    return ArqueroEvolucionado;
}(arquero_1.Arquero));
exports.ArqueroEvolucionado = ArqueroEvolucionado;
