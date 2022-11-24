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


d3.json("data.json").then((datos) => {
    datos = datos.map(v => ({ ...v, image_url: `item_${v.ID}.png` }))
    console.log(datos);

    const vis = d3.select('#vis')

    datos.map(obj => {
        vis.append('img').attr('src', `collectibles/${obj["image_url"]}`)
    })

    const svg_bubble = d3.select("#bubble_vis")
        .style("border", "5px solid black")
        .style("border-radius", "5px")
        .append("svg")
        .attr("width", WIDTH_BUBBLE)
        .attr("height", HEIGHT_BUBBLE)

    const escalaBubble = d3
        .scalePow()
        .exponent(1 / 2)
        .domain([0, d3.max(datos, (d) => d.Quality)])
        .rangeRound([10, 50]);


    const myNodes = datos.map(d => ({ ...d, radius: escalaBubble(d.Quality), x: Math.random() * width_bubble, y: Math.random() * height_bubble }))
    console.log(myNodes)


    // < defs >
    //     <pattern id="image" x="0%" y="0%" height="100%" width="100%"
    //         viewBox="0 0 512 512">
    //         <image x="0%" y="0%" width="512" height="512" xlink:href="https://cdn3.iconfinder.com/data/icons/people-professions/512/Baby-512.png"></image>
    //     </pattern>
    // </defs >

    // <circle id="sd" class="medium" cx="5%" cy="40%" r="5%" fill="url(#image)" stroke="lightblue" stroke-width="0.5%" />


});

