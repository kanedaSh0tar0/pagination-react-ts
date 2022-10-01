import React, { FC, useState } from 'react'

import styles from './ControlForm.module.scss'

interface ControlFormProps {
    handleChangePerPage: (perPage: number) => void
    handleChangeActions: () => void
    perPage: number
    actions: boolean
}

const ControlForm: FC<ControlFormProps> = ({ handleChangePerPage, handleChangeActions, perPage, actions }) => {
    const [perPageInput, setPerPageInput] = useState<number>(perPage)

    return (
        <div className={styles.container}>
            <div className={styles.btnsCheckbox}>
                <label htmlFor='actions'>Pagination with actions buttons?</label>
                <input name='actions' type='checkbox' checked={actions} onChange={handleChangeActions} />
            </div>

            <div className={styles.perPageInput}>
                <label htmlFor='perPage'>Post per pages</label>
                <input
                    name='perPage'
                    type='number'
                    min='1'
                    max='100'
                    value={perPageInput}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setPerPageInput(+target.value ? +target.value : 1)}
                />

                <button onClick={() => handleChangePerPage(perPageInput)}>Change per page posts</button>
            </div>
        </div>
    )
}

export default ControlForm