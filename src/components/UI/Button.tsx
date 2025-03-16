import './Button.sass'

export const Button = (
    {
        label,
        outline,
        onClick
    }: {
        label: string,
        outline?: boolean,
        onClick: () => void,
    }
) => {
    return <>
        <button
            className={`Button ${outline ? 'outline' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    </>
}
