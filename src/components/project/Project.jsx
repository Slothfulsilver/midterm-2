import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TITLE, TEXT } from "../../ui/styles";

/**
 * Project Information
 * @author Celia Lucia Castañeda Arizaga
 * Presents the selected project's title, date, description in 1 column and the project's image in another column
 * Uses the current theme for the font color and font type
 * @param item project information
 * @returns <Grid> selected project info
 */

function Project({ item }) {
  const { title, img, date, description } = item;

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: "flex",
          backgroundColor: "#FFD9DF",
          borderRadius: "16px",
        }}
      >
        <CardContent sx={{ flex: 1, margin: 1 }}>
          <Typography
            sx={TITLE}
            component="h2"
            variant="h5"
            color="primary"
          >
            {title}
          </Typography>
          <Typography sx={TEXT} variant="subtitle1" color="secondary">
            {date}
          </Typography>
          <Typography sx={TEXT} variant="subtitle1" color="secondary.dark" paragraph>
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            width: 360,
            display: { xs: "none", sm: "block" },
          }}
          image={img}
          alt={title}
        />
      </Card>
    </Grid>
  );
}

export default Project;
