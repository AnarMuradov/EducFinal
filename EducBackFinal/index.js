import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
import 'dotenv/config'

const port = 3000

const featuresSchema = new Schema({
    icon:String,
    title:String,
    text:String
  });
  const featuresModel = mongoose.model('Feature', featuresSchema);


app.get('/', async (req, res) => {
    const features = await featuresModel.find()
  res.send(features)
})

app.get('/:id',async (req, res) => {
    const {id} =req.params
    const features = await featuresModel.findById(id)
    res.send(features)
  })
  
  app.post('/',async (req, res) => {
    const {icon,title,text} =req.body
    const newFeatures = new featuresModel({icon,title,text})
    await newFeatures.save()
    res.send(newFeatures)
  })
  
  app.put('/:id', async(req, res) => {
    const {icon,title,text} =req.body
    const {id} =req.params
    const features = await featuresModel.findByIdAndUpdate(id,{icon,title,text})
    res.send(features)
  })
  
  app.delete('/:id',async (req, res) => {
    const {id} =req.params
    const features = await featuresModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

  mongoose.connect(process.env.SECRET_KEY)
  .then(() => console.log('Connected!')); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})   