import {useState} from 'react'

const usePagination = (initialValue: number) => {
    const [currentPage, setCurrentPage] = useState<number>(initialValue)

    const handleChangePage = (newPage: number): void => {
        setCurrentPage(newPage)
    }

    return {
        currentPage,
        handleChangePage
    }
}

export default usePagination