import { FC } from 'react';

interface ActionsButtonProps {
    children?: string
    onChangePage: () => void
}

const ActionsButton: FC<ActionsButtonProps> = ({ children, onChangePage }) => {
    return (
        <button onClick={onChangePage}>{children}</button>
    )
}

export default ActionsButton