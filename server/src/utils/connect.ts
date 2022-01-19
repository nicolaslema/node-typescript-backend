import mongoose from "mongoose";
import config from "config";
import log from './logger'

async function connect(){

    const dbUri = config.get<string>('dbURI');

    try{

        await mongoose.connect(dbUri)
        log.info('Connected to db');

    }catch(error){
        log.error(error)
        log.error('Failed connection to db');
        process.exit(1);
    }
}


export default connect
