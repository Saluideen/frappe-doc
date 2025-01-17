frm.fields_dict['work_details'].grid.get_field('work').get_query = function (doc, cdt, cdn) {
    let child = locals[cdt][cdn];

    return {
        doctype: "Partners",
        searchfield: 'from_date',
        filters: [
            ["name", '=', child.partner],
            // ['Child Lead Partner Role', 'subsorce', '=', "Associate partner"],

        ]
    };
}





frm.fields_dict['work_details'].grid.get_field('partner').get_query = function (doc, cdt, cdn) {
    let child = locals[cdt][cdn];
    return {
        filters: [
            ['Child Lead Partner Role', 'source', '=', "Associate partner"]
        ]
    };
}