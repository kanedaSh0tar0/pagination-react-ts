import { FC } from "react"
import { Pagination, Checkbox } from 'antd'

import PaginationProps from "../../types/PaginationProps";

import styles from './PaginationPanel.module.scss'

interface PaginationPropsWithHandleChangers extends PaginationProps {
    handleChangePerPage: (perPage: number) => void
    handleChangeActions: () => void
}

const PaginationPanel: FC<PaginationPropsWithHandleChangers> = ({
    activePage,
    totalItems,
    perPage,
    onChangePage,
    withActions,
    classes,
    handleChangePerPage,
    handleChangeActions
}) => {

    return (
        <div className={styles.container}>
            <Checkbox className={styles.btnsCheckbox} name='actions' checked={withActions} onChange={handleChangeActions}>Pagination with actions buttons?</Checkbox>

            <Pagination
                className={!withActions ? classes?.activeBtn : ''}
                current={activePage}
                total={totalItems}
                showTotal={total => `${total} posts`}
                pageSize={perPage}
                onShowSizeChange={(_, size) => handleChangePerPage(size)}
                onChange={(page) => onChangePage(page)}
            />
        </div>
    )
}

export default PaginationPanel