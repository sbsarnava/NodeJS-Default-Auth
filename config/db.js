import mongoose from 'mongoose'

export default async () => {
    await mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).catch(e => console.log(e));
}