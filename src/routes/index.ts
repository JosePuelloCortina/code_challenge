import { Router, Request, Response } from "express";

const router = Router();
router.get('/', (req: Request, res: Response) => {


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
        
    ]
    
    const dataArr = new Set(data);
    let result = [...dataArr]
    result.sort();
    

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
        domains.push(d + "(" +contadorElemento(data, d) + ")");
      })

      console.log(domains)

      res.send(domains);
})

export default router;