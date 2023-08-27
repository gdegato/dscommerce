/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function update(inputs: any, name: string, newValue: any) {
    return {...inputs, [name]: {...inputs[name], value: newValue }};
}
    
