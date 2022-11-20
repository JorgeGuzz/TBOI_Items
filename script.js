d3.json("data.json").then((datos) => {
    datos = datos.map(v => ({...v, image_url: `item_${v.ID}.png`}))
    console.log(datos);

    const vis = d3.select('#vis')

    datos.map(obj => {
        vis.append('img').attr('src', `collectibles/${obj["image_url"]}`)
    })
    
});

