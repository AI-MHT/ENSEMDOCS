$(document).ready(function () {
    var table = $('#maintable').DataTable({
        mark: true,
        dom: 'Bfrtip',
        lengthMenu: [
            [10, 25, 50, 100, -1],
            ['10 rows', '25 rows', '50 rows', '100 rows', 'Show All']
        ],
        buttons: [
            'pageLength',
        ],
    });

    // 4) Search on Multiple Columns
    var $tfootTh = $('#maintable tfoot th');
    if ($tfootTh.length > 0) {
        $tfootTh.each(function () {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        table.columns().eq(0).each(function (colIdx) {
            $('input', table.column(colIdx).footer()).on('keyup change', function () {
                table
                    .column(colIdx)
                    .search(this.value)
                    .draw();
            });
        });
    }
});
