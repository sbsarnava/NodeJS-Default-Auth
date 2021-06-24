import mongoose from 'mongoose'

export default async () => {
    await mongoose.connect('MONGODB Connection URI goes here', { useNewUrlParser: true, useUnifiedTopology: true }).catch(e => console.log(e));
}