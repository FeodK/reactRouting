import React from "react";

export default function List({ renderProps }) {
  return <ul>{renderProps()}</ul>;
}
