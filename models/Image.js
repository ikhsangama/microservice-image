const { ObjectId } = require('mongodb')
const db = require('../config/mongodb')
const mongodb = require('../config/mongodb')

class Image {
  static MoviesCollection = db.collection('movies')

  // static findAll(options) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const movies = await this.MoviesCollection.find(options).toArray()
  //       console.log(movies, "<< movies")
  //       resolve(movies)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  // static findById(id) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       // 5fa43408d7b2a32ec9519a92 <<id
  //       const movie = await this.MoviesCollection.findOne({ _id: ObjectId(id) })
  //       resolve(movie)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  // static create(newMovie) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const movie = await this.MoviesCollection.insertOne(newMovie)
  //       console.log(movie, "<< movie")
  //       resolve(movie)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  // static update(id, updateMovie) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const movie = await this.findById(id)
  //       updateMovie = { ...movie, ...updateMovie }
  //       const result = await this.MoviesCollection.updateOne({ _id: ObjectId(id) }, { $set: updateMovie })
  //       resolve(result)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  // static delete(id) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       if (!ObjectId.isValid(id))
  //         throw { message: 'not found', statusCode: 404 }
  //       const result = await this.MoviesCollection.deleteOne({ _id: ObjectId(id) })
  //       resolve(result)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

}

module.exports = Image