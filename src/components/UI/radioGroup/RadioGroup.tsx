import {RadioUnit} from "./RadioUnit.tsx";

export const RadioGroup = <T extends string | number>(
    {
        options,
        onChange,
        selectedOption
    }: {
        options: T[];
        onChange: (option: T) => void;
        selectedOption: T;
    }
) => {
    return <>
        <div>
            {options.map((option, i) => (
                <RadioUnit
                    key={i}
                    isActive={selectedOption === option}
                    option={option}
                    onClick={() => onChange(option)}
                />))}
        </div>
    </>
}
