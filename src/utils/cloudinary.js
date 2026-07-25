import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.name, 
    api_key: process.env.key, 
    api_secret: process.env.secret,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    // upload the file on cloud

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })

    // file has been uploaded sucessfully
    // console.log("File is uploaded on cloudinary", response.url);

    fs.unlinkSync(localFilePath)
    return response;

  } catch (error) {
    // remove the locally saved temporary file as the upload operation got failed
    
    fs.unlinkSync(localFilePath);

    console.log("Cloudinary upload error:", error);
    
    return null;
  }
}

export {uploadOnCloudinary}
