"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlService_1 = require("../service/urlService");
const urlService = new urlService_1.UrlService();
const router = (0, express_1.default)();
router.get('/:id', async (req, res) => {
    const idUrl = req.params.id;
    const result = await urlService.getLongUrl(idUrl);
    if (result) {
        return res.redirect(result);
    }
    res.sendFile('index.html', { root: __dirname });
});
router.post('/', async (req, res) => {
    const longUrl = req.body.longUrl;
    try {
        const shortenURL = await urlService.shortenURL(longUrl);
        res.status(200).send({
            shortenURL: shortenURL
        });
    }
    catch (e) {
        // @ts-ignore
        res.status(400).send({ errorMsg: e.message });
    }
});
exports.default = router;
