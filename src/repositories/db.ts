import mongoose from "mongoose";
import _link from '../models/Link'

const connectionString = process.env.MONGOOSE_URI || "";


export class LinkDb {
    async getUrl(idUrl:string) {
            return _link.findOne({idUrl: idUrl})
    }
    async createUrl(longUrl:string) {
        const urlInDb = await _link.findOne({longUrl:longUrl})
        if(urlInDb) {
            return urlInDb.idUrl
        }
        return (await _link.create({longUrl: longUrl})).idUrl

    }
     async RunDb()  {
        try {
            await mongoose.connect(connectionString);
            await mongoose.connection.db?.admin().command({ ping: 1 });
            console.log("Connected to db successfully.");
        }   catch(e) {
            console.log(e)
            await mongoose.disconnect();
        }
    }




}