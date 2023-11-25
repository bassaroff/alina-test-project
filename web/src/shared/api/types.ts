export interface IPage<T> {
    content: T[]
    page: number
    size: number
    totalElements: number
}