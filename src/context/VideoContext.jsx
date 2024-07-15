import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      title: 'My Heart Will Go On',
      category: 'Musica Romantica',
      thumbnail: 'https://imagenes.elpais.com/resizer/v2/76DDV5UTJRC7RH5NFWGRZKT4HI.jpg?auth=694476b5f9188e8512066278fea1cadffe3f440889aab77909a0655ef603c795&width=414',
      videoUrl: 'https://www.youtube.com/watch?v=9bFHsd3o1w0',
      description: 'Céline Dion - My Heart Will Go On',
    },
    {
      title: 'The Way You Make Me Feel',
      category: 'Musica Romantica',
      thumbnail: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/CUHB7YZV4JENJDVEOCBIBDES2U.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=HzZ_urpj4As',
      description: 'Michael Jackson - The Way You Make Me Feel',
    },
    {
      title: 'Nunca es tarde',
      category: 'Musica Romantica',
      thumbnail: 'https://cdn.milenio.com/uploads/media/2019/01/22/natalia-jimenez-jesus-navarro-foto.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=xGofbPUk1r8',
      description: 'Natalia Jiménez, Jesús Navarro',
    },
    {
      title: 'Titanic',
      category: 'Peliculas Comedia y Romance',
      thumbnail: 'https://i.blogs.es/4a9cb1/titanic/1366_2000.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=_-yst0JMvns',
      description: 'Titanic',
    },
    {
      title: 'Somos como niños 2',
      category: 'Peliculas Comedia y Romance',
      thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTawWF8OLdSup99zTX9X_a7vgKojBEGw4F9Bs4dVlsgHNLRaz1euv-B623A2x3jLYccenmAmfERAJKjV3hpXw07_v_FuOx_5QbyDuySYOCI9vrVBQhB7-f4emVPW5_y82ZR5LufULPhwML/s1600/grown-ups-2-wallpaper-01.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=wWxHIKL_nwA',
      description: 'Somos como niños 2 Pelicula completa',
    },
    {
      title: 'Orgullo Y Prejuicio',
      category: 'Peliculas Comedia y Romance',
      thumbnail: 'https://discordiamag.com/wp-content/uploads/2021/02/Portada-e1676814355157.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YmrJgzs3zcI',
      description: 'Orgullo Y Prejuicio Pelicula completa',
    },
    {
      title: 'Violet Evergarden',
      category: 'Anime',
      thumbnail: 'https://i.ytimg.com/vi/4RXq_A8p4hU/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=Q0kKi50duZg&list=PLZlI5rui30nuNhXly3PfXDqL2hMhWpoZ5',
      description: 'Violet Evergarden Cap 1',
    },
    {
      title: 'My Hero Academy',
      category: 'Anime',
      thumbnail: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ad3c6bbdc8d6e3a236292f3e8223f852.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=EPVkcwyLQQ8&list=PL5YuBePNetOBM0Q15PQtvCLe7Udh9s1ZZ',
      description: 'My Hero Academy Cap 1',
    },
    {
      title: 'Maho Tsukai no Yome',
      category: 'Anime',
      thumbnail: 'https://x5f9g8z5.rocketcdn.me/wp-content/uploads/2019/02/ancientmagusbride-110117-2.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=8aI7DGC5Kzc',
      description: 'Maho Tsukai no Yome Cap 1',
    },

  ]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (videoTitle) => {
    const updatedVideos = videos.filter(video => video.title !== videoTitle);
    setVideos(updatedVideos);
  };

  const editVideo = (editedVideo) => {
    const updatedVideos = videos.map(video =>
      video.title === editedVideo.title ? editedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
