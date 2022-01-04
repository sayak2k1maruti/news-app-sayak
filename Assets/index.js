export const getTimeDiff = (date) => {
    try {
        let publishedDate = new Date(date)
        let publishedTime = publishedDate.getTime()
        let currTime = new Date()
        let difference = (currTime - publishedTime) / 1000
        if (difference / (24 * 3600 * 30) >= 1) {
            return `${parseInt(difference / (24 * 3600 * 30))} months ago`
        } else if (difference / (24 * 3600 * 7) >= 1) {
            return `${parseInt(difference / (24 * 3600 * 7))} week ago`
        } else if (difference / (24 * 3600) >= 1) {
            return `${parseInt(difference / (24 * 3600))} days ago`
        } else if (difference / 3600 >= 1) {
            return `${parseInt(difference / 3600)} hours ago`
        } else if (difference / 60 >= 1) {
            return `${parseInt(difference / 60)} minutes ago`
        } else {
            return "just now"
        }
    } catch (e) {
        return "unknown"
    }
}