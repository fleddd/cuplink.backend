import Router from 'express'
import {UrlService} from "../service/urlService";


const urlService = new UrlService()

const router = Router()

router.get('/:id', async (req,res) => {
    const idUrl = req.params.id

    const result = await urlService.getLongUrl(idUrl)
    if(result){
        return res.redirect(result)
    }


    res.sendFile('index.html', {root: __dirname })

})


router.post('/', async (req,res) => {
    const longUrl = req.body.longUrl;
    try {
        const shortenURL = await urlService.shortenURL(longUrl);
        res.status(200).send({
            shortenURL: shortenURL
        });
    }
    catch (e)
    {
        // @ts-ignore
        res.status(400).send({errorMsg: e.message});
    }
})



export default router