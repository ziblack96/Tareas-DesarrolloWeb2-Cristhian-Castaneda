interface Props {
    onClick: () => void;
    children: React.ReactNode;
}

export default function buttonIdioma({ onClick ,children}:Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            >{children}
        </button>
    );
}