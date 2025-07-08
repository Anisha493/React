import Product from "../models/Product.js"


const createProduct = async (req,res)=>{
    const {ram,rom,productName,description,price,gen, brand}=req.body
    try{
        //console.log(ram,rom,productName,description,price)

    if(!ram) {throw new Error('ram is required')}
    if(!rom) {throw new Error("rom is required")}
    if(!productName || !description || !price || !gen || !brand) {
        throw new Error("Credential missing")
     }
    
    const data = await Product.create({
        productName:productName,
        ram:ram,
        rom:rom,
        price:price,
        description:description,
        gen:gen,
        brand:brand
    })
    res.send(data)
    } catch (error){
        console.log(error.message)
        res.status(400).send(error.message)
    }
    
}

const getAllProduct = async (req,res)=>{
    try{
        const data = await Product.find()
        res.status(200).json({data})
    } catch{
        console.log(error.message)
        res.status(400).send(error.message)
    }
}
const getAllProductById =async (req,res) => {
  const id = req.params.id;
  const data = await Product.findById(id);
  res.status(200).json({message:"get my singleProduct", data});
}

export {createProduct, getAllProduct, getAllProductById};
