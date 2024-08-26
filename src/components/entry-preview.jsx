import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const EntryPreview = ({ node }) => {
  const { slug, frontmatter } = node;
  const { title, description, tags, thumbnail } = frontmatter;
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    if (tags) {
      const tagSet = new Set();
      tags.split(",").forEach((tag) => {
        if (tag.length > 0) {
          const formattedTag = tag.replace(/-/g, " ").trim();
          tagSet.add(formattedTag);
        }
      });
      const tagArray = Array.from(tagSet);
      setAllTags(tagArray);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {/* Left Section (Text) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          borderTop: "3px solid lightgrey",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <div>
            <StaticImage
              src="../images/entry-preview-icon.svg"
              alt="Entry preview icon"
              width={15}
              height={15}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 6,
            gap: "10px",
            paddingRight: "40px",
          }}
        >
          <div>
            <Link to={slug} style={{ textDecoration: "none", color: "black" }}>
              <h1 style={{ margin: 0, lineHeight: 1 }}>
                {title.toUpperCase()}
              </h1>
            </Link>
          </div>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.2em",
              maxHeight: "4.8em",
            }}
          >
            {description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 2,
          }}
        >
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.2em",
              maxHeight: "7.2em",
            }}
          >
            {allTags &&
              allTags.length > 0 &&
              allTags.map((tag, index) => (
                <i
                  key={index}
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {tag}
                  {index < allTags.length - 1 && ", "}
                </i>
              ))}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div style={{ width: "50%" }}>
        {
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "145px",
              overflow: "hidden",
            }}
          >
            {thumbnail && (
              <Link
                to={slug}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                  }}
                  src={thumbnail.publicURL}
                />
              </Link>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default EntryPreview;
