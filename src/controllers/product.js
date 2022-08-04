import Product from '../models/product'

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        console.log('product', product);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
export const list = async (req, res) => {
    try {
        const product = await Product.find().sort({ createAt: -1 });
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}