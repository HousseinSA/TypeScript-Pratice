"use strict";
const year = document.querySelector("#year");
const date = new Date().getFullYear().toString();
year.setAttribute("datetime", date);
year.textContent = date;
