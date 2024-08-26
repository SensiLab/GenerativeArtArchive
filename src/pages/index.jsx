import React, { useEffect, useState } from "react";

import "../components/global.css";
import "../components/index.css";
import "../components/content-list.css";
import { useEntriesData } from "../entry-queries";

import Layout from "../components/layout";

import EntryPreview from "../components/entry-preview";

import { CATEGORIES, CATEGORIES_TO_FILTER_MAP } from "../constants/categories";

import { useCategory } from "../contexts/CategoryContext";
import { useTag } from "../contexts/TagContext";

const HomePage = ({}) => {
  const { currentCategory } = useCategory();
  const [randomEntry, setRandomEntry] = useState(null);
  const { allTags, setAllTags, currentTag, handleTagChange } = useTag();
  const entries = useEntriesData();
  const entriesFilteredByCategory =
    entries[CATEGORIES_TO_FILTER_MAP[currentCategory]];
  const [entriesFilteredByTag, setEntriesFilteredByTag] = useState([]);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const tagCallback = (tag) => {
    handleTagChange(tag);
  };

  useEffect(() => {
    const randomCategory = getRandomElement(Object.keys(CATEGORIES));
    const filter = CATEGORIES_TO_FILTER_MAP[randomCategory];
    const entriesFromRandomCategory = entries[filter].nodes.filter((entry) => {
      return entry.frontmatter.description !== null;
    });
    const randomEntry = getRandomElement(entriesFromRandomCategory);
    setRandomEntry(randomEntry);
  }, []);

  // Set tags based on entries in current category
  useEffect(() => {
    const tags = new Set();
    tags.add("all");

    entriesFilteredByCategory.nodes.forEach((entry) => {
      if (entry.frontmatter.tags) {
        entry.frontmatter.tags.split(",").forEach((tag) => {
          if (tag.length > 0) {
            tags.add(tag.trim());
          }
        });
      }
    });

    const tagArray = Array.from(tags);

    setAllTags(tagArray);
    handleTagChange(tagArray[0]);
  }, [entriesFilteredByCategory]);

  useEffect(() => {
    if (currentTag === "all") {
      setEntriesFilteredByTag(entriesFilteredByCategory.nodes);
    } else {
      const filteredEntries = entriesFilteredByCategory.nodes.filter(
        (entry) => {
          if (entry.frontmatter.tags) {
            const entryTags = entry.frontmatter.tags
              .split(",")
              .map((tag) => tag.trim());
            return entryTags.includes(currentTag);
          }
          return false;
        }
      );
      setEntriesFilteredByTag(filteredEntries);
    }
  }, [currentTag, entriesFilteredByCategory]);

  return (
    <main className="homepage">
      <title>Home Page</title>

      <section className="full">
        <Layout
          featuredArticle={randomEntry}
          entries={entriesFilteredByCategory.nodes}
          tags={allTags}
          currentTag={currentTag}
          tagCallback={tagCallback}
        >
          {/* Children of Layout here is a list of entry previews */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {entriesFilteredByTag.map((node) => (
              <EntryPreview key={node.frontmatter.title} node={node} />
            ))}
          </div>
        </Layout>
      </section>
    </main>
  );
};

const Index = () => {
  return <HomePage />;
};

export default Index;
