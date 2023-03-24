import { Router, Request, Response } from "express";
let domainsList = require('../../data.js')

const router = Router();

router.get('/', (req: Request, res: Response) => {

    function countDomains(logs: string, minHits: number = 0): string{
        const domainCounts: { [domain: string]: number } = {};
        const lines = logs.split('\n');
        

        for (let line of lines) {
            const [ domain, countStr] = line.trim().split(/\s+/);
            const count = parseInt(countStr);

            const domainParts = domain.split('.');
            const domainLength = domainParts.length;
            const topLevelDomian = domainParts[domainLength - 1];
            const secondLevelDomian = domainParts[domainLength - 2];

            if ( topLevelDomian === 'com' || topLevelDomian === 'co'){
                const mainDomain = `${domainParts[domainLength - 3]}.${secondLevelDomian}.${topLevelDomian}`;
                domainCounts[mainDomain] = (domainCounts[mainDomain] || 0) + count;
            }else{
                const mainDomain = `${secondLevelDomian}.${topLevelDomian}`;
                domainCounts[mainDomain] = (domainCounts[mainDomain] || 0) + count;
            }
        }


        const domainCountsArray = Object.entries(domainCounts).map(([domain, count]) => ({ domain, count }));
      

        domainCountsArray.sort((a, b) => {
          if (a.count === b.count) {
            return a.domain.localeCompare(b.domain);
          } else {
            return b.count - a.count;
          }
        });
        const filteredArray = domainCountsArray.filter(({ count }) => count >= minHits);
        const outputLines = filteredArray.map(({ domain, count }) => `${domain} (${count})`);


        return outputLines.join('\n');
      }

    const result = countDomains(domainsList, 50);
    res.send(result);

})

export default router;