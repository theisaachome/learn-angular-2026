import {getCurrencies} from "./getCurrencies"


describe('array test', () => {
   it('should return supported currencies',() =>{
      const results = getCurrencies();
      expect(results).contain("USD");
      expect(results).contain("AUD");
      expect(results).contain("EUR");
   })
})
