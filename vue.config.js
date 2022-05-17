module.exports = {
    // 預設在生成的靜態資原始檔名中包含hash以控制快取
    filenameHashing: true,

    publicPath: "./",

    devServer: {
        host: '0.0.0.0',
        proxy: 'http://localhost:8080/',
    },


    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/styles/variables.scss";
            @import "@/assets/styles/mixins.scss";
          `,
        },
      },
    },
  

}