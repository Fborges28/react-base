let compress_images = require("compress-images"),
  INPUT_path_to_your_images,
  OUTPUT_path;
 
INPUT_path_to_your_images = "assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg}";
OUTPUT_path = "assets/compressed/img/";
 
compress_images(INPUT_path_to_your_images, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);