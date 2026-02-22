import {compute} from './compute'


describe('compute', () => {
  it("should return zero if number is less than ",() =>{
    const result =  compute(-1);
    expect(result).toBe(0);
  })
  it("should increment the input if it is positive.",()=>{
    const result =  compute(1);
    expect(result).toBe(2);
  })
})
