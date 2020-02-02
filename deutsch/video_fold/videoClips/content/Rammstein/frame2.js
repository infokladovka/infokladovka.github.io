 //var my_link="https://archive.org/download/ichwillrammstein/Ich%20Will%20-%20Rammstein.mp4";
	var a=5;
	var my_link=parent.window.my_link;
      jwplayer("tvplayer").setup({
      //file: "https://archive.org/download/ichwillrammstein/Ich%20Will%20-%20Rammstein.webm",
      //file: "https://archive.org/download/ichwillrammstein/Ich%20Will%20-%20Rammstein.mp4",
      file: my_link,
	  
      //file: "https://thallium.cdn.apollostream.xyz/521cf9f7b8e050b86c8af299de260b12:2019082600:1394065122/flv/2bf27b37448c38e74fe1bd93b7fc4c56.mp4",
image: "",
        width: '100%',
	height: '100%',
        skin: "six",
        abouttext:"pro7livestream.com",
        aboutlink: "",
        stretching:'exactfit',
        title: '',
	autostart: 'false',
	mute: 'false',
	androidhls: 'true',
        primary: "html5",
logo: {
    file: "",
    position: 'top-left',
    margin: '10',
    link: "http://pro7livestream.com/"
        },
        
    });
