import { FC, useEffect, useState } from "react"

import PaginationProps from "../../types/PaginationProps";

import ActionsButton from "../ActionsButton/ActionsButton";
import PaginationItem from "../PaginationItem/PaginationItem";

import styles from './PaginationPanel.module.scss'

const PaginationPanel: FC<PaginationProps> = ({
    activePage,
    totalItems,
    perPage,
    onChangePage,
    withActions,
    classes
}) => {
    const [paginationItems, setPaginationItems] = useState<number[]>([])

    useEffect(() => {
        let itemsArr = []

        for (let i = 1; i < Math.ceil(totalItems / perPage) + 1; i++) {
            itemsArr.push(i)
        }

        setPaginationItems(itemsArr)
    }, [perPage, totalItems])

    return (
        <div className={styles.container}>
            {withActions && <ActionsButton
                onChangePage={() => onChangePage(activePage > 1 ? activePage - 1 : activePage)}
                disabled={activePage === 1}
            >
                Prev
            </ActionsButton>
            }

            {paginationItems.map(item => {
                return <PaginationItem
                    key={item}
                    num={item}
                    classes={item === activePage ? classes?.activeBtn : ''}
                    onChangePage={() => onChangePage(item)}
                />
            })}

            {withActions && <ActionsButton
                onChangePage={() => onChangePage(activePage < paginationItems.length ? activePage + 1 : activePage)}
                disabled={activePage === paginationItems.length}
            >
                Next
            </ActionsButton>
            }
        </div>
    )
}



export default PaginationPanel