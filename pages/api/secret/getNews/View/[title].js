const handler = async (req, res) => {
    const { title } = req.query
    if (req.method === 'GET') {
        try {
            const raw = await fetch(`${process.env.PUBLIC_API_URL_BASE}/everything/?` + new URLSearchParams({
                apiKey: process.env.NEWS_API,
                q: title.split('-')[0].toString()
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