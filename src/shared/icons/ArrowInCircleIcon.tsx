interface Props {
    className?: string;
}

export const ArrowInCircleIcon = ({ className }: Props) => {
    return (
        <svg className={className ?? ''} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10L6 10L6 4L10 4L10 10L13 10V11L8 16L3 11L3 10Z" fill="#000000" />
            <path d="M2 0L14 1.90735e-06V2L2 2V0Z" fill="#000000" />
        </svg>
    );
};
