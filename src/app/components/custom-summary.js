export function lines(summary) {
    const summaryArray = summary.split("<br>");
    const line = summaryArray.map((line) => {
      return `<p class="flex flex-row gap-1"> ${line} </p>`;
    });
    return line.join(" ");
  }