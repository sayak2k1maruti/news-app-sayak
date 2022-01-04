const handler = async (req, res) => {
    const { category } = req.query
    if (req.method === 'GET') {
        try {
            const raw = await fetch(`${process.env.PUBLIC_API_URL_BASE}/top-headlines/?` + new URLSearchParams({
                country: 'in',
                apiKey: process.env.NEWS_API,
                pageSize: process.env.PAGE_SIZE,
                category: category,
                page: req.query.page ? req.query.page : 1
            }))
            const data = await raw.json()
            res.json(data)
        } catch (e) {
            const raw = await fetch(`${process.env.PUBLIC_API_URL_BASE}/top-headlines/?` + new URLSearchParams({
                country: 'in',
                apiKey: process.env.NEWS_API,
                pageSize: process.env.PAGE_SIZE,
                category: category,
                page: req.query.page ? req.query.page : 1
            }))
            const data = await raw.json()
            res.json(data)
        }
    }
}
export default handler