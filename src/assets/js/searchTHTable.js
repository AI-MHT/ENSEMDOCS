// const month_th = [
//   null
// ];

// function pad(d) {
//   return d < 10 ? "0" + d.toString() : d.toString();
// }

// minDateFilter = "";
// maxDateFilter = "";

// $.fn.dataTableExt.afnFiltering.push(function(oSettings, aData, iDataIndex) {
//   if (typeof aData._date == "undefined") {
//     const day = aData[4].split(" ")[0];
//     let month = aData[4].split(" ")[1];
//     const year = aData[4].split(" ")[2];
//     month = month_th.indexOf(month);

//     aData[4] = `${year - 543}-${pad(month)}-${pad(day)}`;

//     aData._date = new Date(aData[4]).getTime();
//   }

//   if (minDateFilter && !isNaN(minDateFilter)) {
//     if (aData._date < minDateFilter) {
//       return false;
//     }
//   }

//   if (maxDateFilter && !isNaN(maxDateFilter)) {
//     if (aData._date > maxDateFilter) {
//       return false;
//     }
//   }

//   return true;
// });
