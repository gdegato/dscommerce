/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Select from 'react-select'

export default function FormSelect(props: any) {
    const {
        className,
        validation,
        invalid = 'false',
        dirty = 'false',
        onTurnDirty,
        ...selectProps } = props;

    function handleBlur() {
        onTurnDirty(props.name)
    }
    return (
        <div
            className={className}
            data-invalid={invalid}
            data-dirty={dirty}
        >
            <Select
                {...selectProps}
                onBlur={handleBlur}
            />
        </div>

    );
}

