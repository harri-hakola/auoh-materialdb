
//jQuery(document)

$(document).ready(() => {
    let table = $("#materials_table").DataTable({
        ajax: {
            type: "GET",
            datatype: "json",
            url: "/api/materials",
            dataSrc: ""
        },
        rowId: "_id",
        columns: [
            {data: "_id", type: "readonly"},
            {data: "name", type: "text", required: true},
            {data: "min_density", type: "float", required:true},
            {data: "max_density", type: "float", required:true},
            {data: "min_strength", type: "float", required:true},
            {data: "max_strength", type: "float", required:true},
            {data: "min_strength_density", type: "float", required:true},
            {data: "max_strength_density", type: "float", required:true},
        ]
    });
});