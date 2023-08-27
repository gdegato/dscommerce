/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export default function FormInput(props: any) {
    const { validation, ...inputProps } = props;
    return (
        <input {...inputProps} />
    );
}