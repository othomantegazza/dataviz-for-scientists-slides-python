const f = d3.selectAll(".side-fig")
    .select("img")
    .attr("width", 500)
    .attr("height", null)

const h = d3.selectAll(".hide-fig")
    .select("img")
    .remove()