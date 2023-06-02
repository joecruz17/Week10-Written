const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
app.get('/practical/items', async (req, res) => {
    try {
        const foundItems = await Item.find({})
        res.render('/practical/items/Index', {
            items: foundItems
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})

app.get('/items', async (req, res) => {
    try {
        const foundItems = await Fruit.find([{}])
        res.render('/practical/items/Index', {
            items: foundItems
        })
    } catch(error) {
        res.status(400).send({message:error.message})
    }
}

)

app.post('/items', async (req, res) => {
    if(req.body.readyToBuy === 'on'){
        req.body.readyToBuy = true
    }else {
            req.body.readyToBuy = false

    }
    try{
        const createdItem = await Item.create(req.body)
        res.redirect(`/practical/items/${createdItem._id}`)
    }catch(error){
        res.status(400).send({message:error.message})
    }
})

app.get('/practical/items/:id', async (req, res) => {
    try{
        const foundItem = await Item.findOne({_id: req.params.id})
        res.render('/practical/items/Show', {
            item: foundItem
        })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

