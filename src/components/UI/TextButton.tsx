import './TextButton.sass'

export const TextButton = (
    {
        label,
        onClick
    }: {
        label: string;
        onClick: () => void
    }
) => {
    return <>
        <button className={'TextButton'} onClick={onClick}>
            {label}
        </button>
    </>
}
