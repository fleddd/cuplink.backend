import * as process from 'node:process'
import { LinkDb } from '../repositories/db'

const _linkDb = new LinkDb()

export class UrlService {
	async getLongUrl(idUrl: string) {
		const url = await _linkDb.getUrl(idUrl)
		return url?.longUrl
	}
	async shortenURL(longUrl: string) {
		const shortenIdUrl = await _linkDb.createUrl(longUrl)

		if (process.env.BASEURL == undefined) {
			throw new Error('Missing base url.')
		}
		return process.env.BASEURL + shortenIdUrl
	}
}
