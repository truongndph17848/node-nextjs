import Category from '../models/category'

export const create = async (req, res) =>{
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}

export const list = async ( req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const remove = async ( req, res) => {
    const condition = { _id: req.params.id};
    try {
        const categories = await Category.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm thất bại"
        })
    }
}


        })
    }
}