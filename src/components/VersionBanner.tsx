"use client";
import React, { useState, useEffect } from "react";

const lastMajorVersion = new Date("2024-8-22"); // 1.0 - Friday
const indexDate = lastMajorVersion;
indexDate.setDate(lastMajorVersion.getDate() - 1);
const defaultTagline = ":(){ :|:& };";

export const VersionBanner = () => {
  // State to manage the editable tagline
  const [tagline, setTagline] = useState<string>(
    localStorage.getItem("tagline") || defaultTagline
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(tagline);

  // Update the tagline when localStorage is modified
  useEffect(() => {
    localStorage.setItem("tagline", tagline);
  }, [tagline]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    setTagline(inputValue);
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTagline(inputValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="p-version-banner" suppressHydrationWarning>
      <p>Hack Night</p>
      <p className="pulsing">v1.{weeksPast(indexDate)}</p>
      <p className="tagline" onDoubleClick={handleDoubleClick}>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          tagline
        )}
      </p>
      <br></br>
      {/* <p className="info" suppressHydrationWarning>
        build instant: {Date.now()}{" "}
      </p> */}
    </div>
  );
};

function weeksPast(start: Date) {
  const currentDate = Date.now();
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const elapsedMilliseconds = currentDate - start.getTime();
  const weeks = Math.floor(elapsedMilliseconds / millisecondsPerWeek);
  return weeks;
}
