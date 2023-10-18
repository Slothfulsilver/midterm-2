import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { HOVER, TITLE, TITLE2 } from "../../ui/styles.js";
import { itemData } from "./lucyData.js";
import { itemData2 } from "./arturoData.js";
import Project from "../project/Project.jsx";
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

export default function Gallery({ onItemSelect, selectedTheme }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const bottomRef = React.useRef();

  const handleImageClick = (item) => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  const handleScroll = () => {
    bottomRef.current.scrollIntoView();
  }

  return (
    <div>
      <Container maxWidth={false} sx={{ display: 'flex', flexWrap: 'nowrap', transform: 'translateZ(0)' }}>
      <ImageList
        sx={{
          width: "70rem",
          borderRadius: "16px",
          padding: 3,
        }}
        cols={4}
      >
        {selectedTheme === "Arturo"? (
        <ListSubheader component="div" sx={TITLE2} color="primary" cols={10}>
          Projects
        </ListSubheader>):(
        <ListSubheader component="div" sx={TITLE} color="primary" cols={10}>
        Projects
        </ListSubheader>
        )}
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {selectedTheme === "Arturo"? (
        itemData2.map((item) => (
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
                  onClick={handleScroll}
                ></IconButton>
              }
              sx={{ borderRadius: "16px" }}
            />
          </ImageListItem>
        ))
        ):(
          itemData.map((item) => (
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
                    onClick={handleScroll}
                  ></IconButton>
                }
                sx={{ borderRadius: "16px" }}
              />
            </ImageListItem>
          ))
        )}
      </ImageList>
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
