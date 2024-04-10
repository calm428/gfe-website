import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  if (process.env.IS_BUILD_ENV === "true") {
    console.warn("MONGODB_URI is not set. Skipping database connection...");
  } else {
    throw new Error("Please define the MONGODB_URI environment variable");
  }
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn || process.env.IS_BUILD_ENV === "true") {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected DB")
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    
    throw e
  }

  return cached.conn
}

export default dbConnect
