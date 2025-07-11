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
        const query = req.query
        //console.log(query)
        

        const sort =JSON.parse(req.query.sort || '{}')
        console.log(sort)
       

        const filter = {}
        //console.log(filter)
        
        //if(req.query.brand){filter.brand = {$in: req.query.brand.split(',')} }
        //console.log(filter)

         
        //return res.send(filter)

        //brand :'Acer'
        //brand:{$in :['Acer', 'Dell']}
        const data = await Product.find(filter).sort(sort).limit(5).skip(5)
        res.status(200).json({data})
        
    } catch(error){
        console.log(error.message)
        res.status(400).send(error.message)
    }
}
const getAllProductById =async (req,res) => {
  const id = req.params.id;
  const data = await Product.findById(id);
  res.status(200).json({message:"get my singleProduct", data});
}

const deleteProductById =async (req,res) => {
  try{
    const id = req.params.id;
  const data = await Product.findByIdAndDelete(id);
  res.status(200).json({message:"Product deleted Successfully"});
  } catch(error){
    console.log(error.message)
    res.status(400).send("Error occurred while trying to delete")
  }
}

const updateProduct = async (req,res) => {
    try{
        const id = req.params.id;
        //const {ram,rom,productName,description,price,gen, brand}=req.body
        const data = await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.status(400).json({data, message:"Product updated Successfully"});
    } catch (error){
        console.log(error.message)
        res.status(400).send(error.message);
    } 
}
export {createProduct, getAllProduct, getAllProductById, deleteProductById, 
    updateProduct};
