const ImageService = {
  getImgUrl(imageName) {
    var images = require.context("../assets/images/", false, /\.jpg$/);
    return images("./" + imageName + ".jpg");
  }
};

export default ImageService;
