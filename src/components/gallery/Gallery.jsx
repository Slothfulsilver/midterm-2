import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "../../ui/Lucy/theme.js";
import { HOVER, TITLE } from "../../ui/styles.js";
import { itemData } from "./lucyData.js";
import Project from "../project/Project.jsx";

export default function Gallery({ onItemSelect }) {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle the image click and set the selected item
  const handleImageClick = (item) => {
    setSelectedItem(item);
    // Call the parent component's function to set the background image
    onItemSelect(item);
  };

  // Function to clear the selected item
  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <ThemeProvider theme={THEME}>
      <ImageList
        sx={{
          width: 500,
          height: 550,
          borderRadius: "16px",
          padding: 3,
        }}
      >
        <ListSubheader component="div" sx={TITLE} color="primary">
          Projects
        </ListSubheader>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem
            sx={HOVER}
            key={item.img}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            date={item.date}
            description={item.description}
            onClick={() => handleImageClick(item)}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: "16px" }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              actionIcon={
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                    borderRadius: "16px",
                  }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
              sx={{ borderRadius: "16px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedItem && (
        <Project
          sx={{ margin: 3 }}
          item={selectedItem}
          onClick={clearSelectedItem}
        />
      )}
    </ThemeProvider>
  );
}
