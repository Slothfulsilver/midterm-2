import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { HOVER, TITLE } from "../../ui/styles.js";
import { itemData } from "./lucyData.js";
import Project from "../project/Project.jsx";
import InfoSocial from "../infoSocial/InfoSocial";
import "./Gallery.css"
import { Container } from "@mui/material";

/**
 * Project Gallery
 * @author Celia Lucia Castañeda Arizaga
 * Project gallery, each item includes title, subtitle and image.
 * When the cursor hovers on an item, the item expands.
 * When an item is clicked an information section about the item clicked is displayed.
 * Uses the current theme for the font color and font type
 * @param onItemSelect state function that changes when an item is clicked on
 * @returns <ThemeProvider> Gallery of Images
 */

export default function Gallery({ onItemSelect }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <Container maxWidth={false} sx={{ display: 'flex' }}>
      <ImageList
        sx={{
          width: 500,
          height: 650,
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
      <InfoSocial/>

      </Container>

      {selectedItem && (
        <Project
          sx={{ margin: 3 }}
          item={selectedItem}
          onClick={clearSelectedItem}
        />
      )}
    </div>
  );
}
