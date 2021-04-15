import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layout/MainLayout";
import { Track } from "../../types/track";

const Index = () => {
  const router = useRouter();
  const tracks: Track[] = [
    {
      _id: "1",
      name: "T",
      artist: "Adolf",
      listens: 1,
      audio:
        "https://localhost:5000/audio/first.mp3",
      picture:
        "https://wowslider.com/sliders/demo-57/data1/images/raccoon365366.jpg",
      text: "123",
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
