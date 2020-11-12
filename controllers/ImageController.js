const Image = require('../models/Image')
const { ObjectId } = require('mongodb')

class ImageController {

  static send(req, res, next) {
    // console.log("trigger")
  }

  // static async findAll(req, res, next) {
  //   try {
  //     const movies = await Movie.findAll()
  //     res.status(200).json(movies)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // static async findById(req, res, next) {
  //   console.log(req.params.id, "<< trigger cek")
  //   try {
  //     if (!ObjectId.isValid(req.params.id))
  //       throw { message: 'not found', statusCode: 404 }
  //     const movie = await Movie.findById(req.params.id)
  //     res.status(200).json(movie)
  //   } catch (error) {
  //     console.log(error, "<< error find by id")
  //     // res.status(error.statusCode || 500).send(error)
  //     next(error)
  //   }
  // }

  // static async create(req, res, next) {
  //   try {
  //     const { title, overview, poster_path, popularity, tags } = req.body
  //     const movies = await Movie.create({
  //       title,
  //       overview,
  //       poster_path,
  //       popularity,
  //       tags,
  //     })
  //     res.status(200).json(movies)
  //   } catch (error) {
  //     // res.json(error)
  //     next(error)
  //   }
  // }

  // static async update(req, res, next) {
  //   try {
  //     const { id } = req.params
  //     if (!ObjectId.isValid(id))
  //       throw { message: 'not found', statusCode: 404 }
  //     const movie = await Movie.update(id, req.body)
  //     console.log(movie, "<<moviecontroller update")
  //     res.status(200).json(movie)
  //   } catch (error) {
  //     // res.json(error)
  //     next(error)
  //   }
  // }

  // static async delete(req, res, next) {
  //   try {
  //     const { id } = req.params
  //     const movie = await Movie.delete(id)
  //     console.log(movie, "<< delete movie")
  //     res.status(200).json({ message: "success delete" })
  //   } catch (error) {
  //     // res.json(error)
  //     next(error)
  //   }
  // }
}

module.exports = ImageController