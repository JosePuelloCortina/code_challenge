"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const data = [
        "client.google.com",
        "www.google.com",
        "www.google.com",
        "client.google.com",
        "www.google.com",
        "www.google.com",
        "client.google.com",
        "www.google.com",
        "www.google.com",
        "youtube.com",
        "facebook.com",
    ];
    const dataArr = new Set(data);
    let result = [...dataArr];
    result.sort();
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
        domains.push(d + "(" + contadorElemento(data, d) + ")");
    });
    console.log(domains);
    res.send(domains);
});
exports.default = router;
