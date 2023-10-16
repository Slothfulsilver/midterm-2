import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
            sx={{ margin: 2 }}
            component="h2"
            variant="h5"
            color="primary"
          >
            {title}
          </Typography>
          <Typography sx={{ margin: 2 }} variant="subtitle1" color="secondary">
            {date}
          </Typography>
          <Typography sx={{ margin: 4 }} variant="subtitle1" paragraph>
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
