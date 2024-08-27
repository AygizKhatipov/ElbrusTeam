export type Points={
    id: number,
    point: number,
    userId: number

}
export type PointsWithoutId = Omit<Points, 'id'>