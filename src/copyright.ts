const year = document.querySelector("#year") as HTMLSpanElement

const date: string = new Date().getFullYear().toString()

year.setAttribute("datetime", date)

year.textContent = date
