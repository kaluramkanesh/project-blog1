//const userModel = require("../models/userModel")
const blogModel=require("../model/blogModel")
const jwt = require("jsonwebtoken");

const mid1 = async function (req, res, next) {
    let token = req.headers["x-api-key"];
    if (!token) token = req.headers["x-api-key"];
    if (token) {
        next()
    } else { return res.send({ status: false, msg: "token must be present" }); }

}


const mid2 = async function (req, res, next) {
    let token = req.headers["x-api-key"];
    if (!token) token = req.headers["x-api-key"];

    let decodedToken = jwt.verify(token, 'functionup-radon')

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })
    blogToBeModified = req.params.blogId
    let blogData = await blogModel.findById(blogToBeModified)
    let authId = blogData.authorId
    let userLoggedIn = decodedToken.authoRId
    if (authId == userLoggedIn) {
        next()
    } else { return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' }) }
}



module.exports.mid1 = mid1
module.exports.mid2 = mid2
//module.exports.mid3 = mid3