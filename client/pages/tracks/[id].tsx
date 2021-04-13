import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Track } from "../../types/track";

const TrackPage = () => {
  const router = useRouter();
  const track: Track = {
    _id: "1",
    name: "T",
    artist: "Adolf",
    listens: 1,
    audio:
      "https://github.com/utimur/music-platform-course/blob/master/client/pages/tracks/index.tsx",
    picture:
      "https://wowslider.com/sliders/demo-57/data1/images/raccoon365366.jpg",
    text: "123",
  };

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        onClick={() => router.push("/tracks")}
        style={{ fontSize: 22 }}
      >
        Назад к списку
      </Button>
      <Grid container style={{margin:"20px 0"}}>
        <img src={track.picture} width={200} height={200} />
        <div style={{marginLeft:30}}>
          <h1>Название трека {track.name}</h1>
          <h2>Исполнитель {track.artist}</h2>
          <h2>Прослушиваний: {track.listens}</h2>
        </div>
      </Grid>
      <h1>Слова песни</h1>
      <p>{track.text}</p>
      <Grid container>
        <TextField
          label={"Ваше имя"}
          fullWidth
        />
        <TextField
          label={"Ваш комментарий"}
          fullWidth
          multiline
          rows={3}
        />
      </Grid>
      <Button>Отправить</Button>
    </MainLayout>
  );
};

export default TrackPage;
