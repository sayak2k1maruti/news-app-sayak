const handler = async (req, res) => {
    const {category , query} = req.query
    if (req.method === 'GET') {
        try{
            const raw = await fetch(`${process.env.PUBLIC_API_URL_BASE}/everything/?` + new URLSearchParams({
                apiKey : process.env.NEWS_API,
                pageSize : process.env.PAGE_SIZE,
                q : query,
                page : req.query.page ? req.query.page : 1
            }))
            const data = await raw.json()
            res.json(data)
        }catch(e){
            console.log(e)
            res.json({
                totalResults : 0,
                articles : []
            })
        }

    }
}
export default handler