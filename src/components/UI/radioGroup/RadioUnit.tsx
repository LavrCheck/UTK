import './RadioUnit.sass'

export const RadioUnit = (
    {
        option,
        onClick,
        isActive
    }: {
        option: string | number;
        onClick: () => void;
        isActive: boolean;
    }
) => {
    return <>
        <button className={`RadioUnit ${isActive ? 'active' : ''}`} onClick={onClick}>
            {option}
        </button>
    </>
}
