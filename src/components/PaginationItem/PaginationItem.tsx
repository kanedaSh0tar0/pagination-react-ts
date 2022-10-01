import cn from 'classnames'
import { FC } from 'react'
import styles from './PaginationItem.module.scss'

interface PaginationItemProps {
    num: number
    onChangePage: () => void
    classes?: string
}

const PaginationItem: FC<PaginationItemProps> = ({ num, classes, onChangePage }) => {
    return (
        <div onClick={onChangePage} className={cn(styles.container, classes)}>
            {num}
        </div>
    )
}

export default PaginationItem