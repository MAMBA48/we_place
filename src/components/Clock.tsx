
export const TheClock = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const time = `(${hour}:${minutes}:${seconds})`

    return (
        <>
            <span>{time}</span>
        </>
    )
}
