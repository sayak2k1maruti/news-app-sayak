const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const raw = await fetch(`${process.env.PUBLIC_API_URL_BASE}/top-headlines/?` + new URLSearchParams({
                country: 'in',
                apiKey: process.env.NEWS_API,
                pageSize: process.env.PAGE_SIZE,
                page: req.query.page ? req.query.page : 1
            }))
            const data = await raw.json()
            res.json(data)
        } catch (e) {
            console.log(e)
            res.json({
                totalResults: 0,
                articles: []
            })
        }
    }
}
export default handler