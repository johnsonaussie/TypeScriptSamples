import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
export function add(...args: number[]) 
{
    return args.reduce((a, b) => a + b, 0)
}
  
// in-source test suites
if (import.meta.vitest)
{
const { it, expect } = import.meta.vitest
it('add', () => 
{
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
})
}
if (import.meta.vitest)
{
    const { it, expect } = import.meta.vitest
    it('Really basic test',()=>
    {
        expect(true).toBe(true);
    }
    )
}
if (import.meta.vitest)
{
    const { it, expect, describe} = import.meta.vitest
    describe('A nascent test',()=>
    {
        it('Really basic test',()=>{
        expect(true).toBe(true);
        })
    });
}
