import mongoose from  'mongoose'

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI!)
        console.log(`Successfully connceted to MongoDB`)
    }
    catch(error: any){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}