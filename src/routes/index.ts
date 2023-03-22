import { Router, Request, Response } from "express";
let file = require('../../data.json')

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const dataArr = new Set(file.data);
    let result = [...dataArr]
    function contadorElemento (dataArr:any, busqueda:any) {
        let acumulador = 0;
        for (let i = 0; i<dataArr.length; i++) {
            if (dataArr[i] === busqueda) {
                acumulador++;
            }
        } 
        return acumulador;
      }
      const domains = new Array<any>();
      result.forEach(function(d, index){
        domains.push(d + "(" +contadorElemento(file.data, d) + ")");
      })
 
    res.send(domains);
})

export default router;