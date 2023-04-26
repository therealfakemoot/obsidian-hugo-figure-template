function filename(fn) {
    return fn.split("/").pop()
}

async function attachmentSelector(tp, current) {
    let dv = app.plugins.plugins.dataview.api
    let p = dv.page(current)


    let linkset = new Set()
    p.file.outlinks.filter(p => p.type == "file").map((l) => linkset.add(l.path))
    let paths = []
        console.group("looping over linkset")
    for ( const path of linkset) {
        console.log(path)
        paths.push(path)
    }
    console.groupEnd()
    console.log(paths)
    let names = paths.map(filename)

    let attachment = await tp.system.suggester(names, paths, 5, "attachment" )
    return attachment
}

module.exports = attachmentSelector;
