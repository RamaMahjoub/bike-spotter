function dateFormat(timestamp: number) {
    const date = new Date(timestamp)

    const day = date.getDate().toString().padStart(2, '0')
    const month = new Intl.DateTimeFormat('en-US', { month: '2-digit' }).format(
        date
    )
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export default dateFormat
