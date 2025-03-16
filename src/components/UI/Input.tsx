import './Input.sass'
import {ChangeEvent} from "react";

export const Input = (
    {
        label,
        value,
        onChange,
        placeholder,
    }: {
        label: string;
        value: number | string;
        onChange: (value: number | string) => void;
        placeholder: string;
    }
) => {
    return <>
        <div className={'Input'}>
            <label>{label}</label>
            <input
                type={'number'}
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.value)
                }}
            />
        </div>
    </>
}
