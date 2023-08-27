/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function update(inputs: any, name: string, newValue: any) {
    return {...inputs, [name]: {...inputs[name], value: newValue }};
}
    
export function toValues(inputs: any) {
    const data: any = {};
    for (let name in inputs) {
        data[name] = inputs[name].value;
    }
    return data;
}