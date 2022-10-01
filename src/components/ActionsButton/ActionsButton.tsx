import { FC } from 'react';

interface ActionsButtonProps {
    children?: string
    onChangePage: () => void
    disabled: boolean
}

const ActionsButton: FC<ActionsButtonProps> = ({ children, onChangePage, disabled }) => {
    return (
        <button disabled={disabled} onClick={onChangePage}>{children}</button>
    )
}

export default ActionsButton