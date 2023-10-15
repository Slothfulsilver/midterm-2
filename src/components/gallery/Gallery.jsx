import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
//import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "../../ui/Lucy/theme.js";
import { HOVER } from "../../ui/styles.js";
import { itemData } from "./lucyData.js";

function view() {
  <Button>Hi</Button>;
}

export default function Gallery() {
  return (
    <ThemeProvider theme={THEME}>
      <ImageList sx={{ width: 500, height: 550 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div" sx={{ fontSize: 26, marginBottom: 2 }}>
            Projects
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem
            sx={HOVER}
            key={item.img}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            date={item.date}
            description={item.description}
            onClick={view}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ThemeProvider>
  );
}
