const WIDTH_BUBBLE = 900;
const HEIGHT_BUBBLE = WIDTH_BUBBLE * 0.7;
const MARGIN_BUBBLE = {
    top: 80,
    bottom: 70,
    left: 100,
    right: 50
};
const width_bubble = WIDTH_BUBBLE - MARGIN_BUBBLE.left - MARGIN_BUBBLE.right;
const height_bubble = HEIGHT_BUBBLE - MARGIN_BUBBLE.top - MARGIN_BUBBLE.bottom;
const svg_bubble = d3.select("#bubble_vis")
                        .style("border", "5px solid black")
                        .style("border-radius", "5px")
                        .append("svg")
                        .attr("width", WIDTH_BUBBLE)
                        .attr("height", HEIGHT_BUBBLE)

d3.json("data.json").then((datos) => {
    datos = datos.map(v => ({...v, image_url: `item_${v.ID}.png`}))
    console.log(datos);

    const vis = d3.select('#vis')

    datos.map(obj => {
        vis.append('img').attr('src', `collectibles/${obj["image_url"]}`)
    })
    
});

