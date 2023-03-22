"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let file = require('../../data.json');
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const dataArr = new Set(file.data);
    let result = [...dataArr];
    function contadorElemento(dataArr, busqueda) {
        let acumulador = 0;
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i] === busqueda) {
                acumulador++;
            }
        }
        return acumulador;
    }
    const domains = new Array();
    result.forEach(function (d, index) {
        domains.push(d + "(" + contadorElemento(file.data, d) + ")");
    });
    console.log(domains);
    res.send(domains);
});
exports.default = router;
