/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
test('Esta prueba no debe fallar', () =>{
    if (1 === 0){
        throw new Error('Error');
    }
})