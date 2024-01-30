import { MenuItem } from "@mui/material";

export const menuItemList = () => {
  const startYear = 1900;
  const endYear = 2024;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;

};