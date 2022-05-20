import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) => {
    let products = await Product.find()
    let cloths = {};
    for (let item of products){
      if(item.title in cloths){
        if(!cloths[item.title].color.includes(item.color) && item.availableQty > 0){
          cloths[item.title].color.push(item.color)
        }
        if(!cloths[item.title].size.includes(item.size) && item.availableQty > 0){
          cloths[item.title].size.push(item.size)
        }

      }else{
        cloths[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          cloths[item.title].color = [item.color]
          cloths[item.title].size = [item.size]

        }
      }

    }
    // console.log(products)
    res.status(200).json({cloths})
  }
  
export default connectDb(handler);