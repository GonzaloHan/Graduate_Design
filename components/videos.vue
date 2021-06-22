<!-- 上传照片使用，可删除-->
<template>
  <div class="videos" ref="videos">
    <video  id="video" class="vio" autoplay="autoplay" v-show="video_show"></video>
    <canvas id="canvas" width="640" height="480" v-show="canvas_show"></canvas>
  </div>
</template>

<script>
  var trans=''

  export default {
    name: "Videos",
    props:{
      isOpen : true,
      modalVisible: Boolean
    },
    data() {
      return {
        video_show : true,
        canvas_show : false,
        url : '',
        loading : true,
      }
    },

    mounted() {
        this.camera_options()
    },
    methods: {
      camera_options(){
        let that = this;
        var constraints = {
          video: {
            width: 400,
            height: 300
          },
        };
        var videos = this.$refs.videos;
        console.info(videos);
        var promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then((MediaStream) => {
          console.info(MediaStream);
          video.srcObject = MediaStream;
          video.play();
        }).catch((error) => {
          console.info(error);
        });
        /**
         * @desc 倒计时以后进行拍照的操作
         */
        setTimeout(function() {
          let canvas = document.getElementById("canvas");
          console.info(canvas);
          canvas.getContext('2d').drawImage(video, 0, 0, 200, 100);
          console.info(typeof video);
          console.info(canvas.getContext('2d').drawImage(video, 0, 0, 200, 100));
          /**
           * @desc 拿到图片的base64
           * @param canvas base64
           */
          canvas = canvas.toDataURL("image/png");
          trans=canvas;
          this.$router.push({path: '/LogIn/Register', query: {trans_name: trans},})
          console.info(trans);
        }, 1000);
      },
    },
  }
</script>

<style scoped>

  #video{
    height: 300px;
    width: 400px;
    display: contents;
    align-items: center;
    justify-content: center;
    background: #CCCCCC;
    border-radius: 4px;
  }
</style>

