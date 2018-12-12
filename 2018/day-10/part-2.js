const input = [
  'position=<-10810,  43870> velocity=< 1, -4>',
  'position=<-21745, -10795> velocity=< 2,  1>',
  'position=< 54771, -54515> velocity=<-5,  5>',
  'position=< 54792, -32660> velocity=<-5,  3>',
  'position=< 21972,  54799> velocity=<-2, -5>',
  'position=<-43565, -43583> velocity=< 4,  4>',
  'position=< 54775,  43864> velocity=<-5, -4>',
  'position=< 54819, -54516> velocity=<-5,  5>',
  'position=< 21981,  32941> velocity=<-2, -3>',
  'position=<-32642,  43871> velocity=< 3, -4>',
  'position=<-43614, -54516> velocity=< 4,  5>',
  'position=<-21758, -43590> velocity=< 2,  4>',
  'position=<-43589, -54520> velocity=< 4,  5>',
  'position=<-10818,  43864> velocity=< 1, -4>',
  'position=<-32646, -43584> velocity=< 3,  4>',
  'position=< 54814, -54523> velocity=<-5,  5>',
  'position=< 43877, -43592> velocity=<-4,  4>',
  'position=< 54766,  32933> velocity=<-5, -3>',
  'position=<-21749,  22006> velocity=< 2, -2>',
  'position=<-32658, -43588> velocity=< 3,  4>',
  'position=<-54544, -54524> velocity=< 5,  5>',
  'position=<-43590, -21725> velocity=< 4,  2>',
  'position=<-32638,  11076> velocity=< 3, -1>',
  'position=< 43861,  32941> velocity=<-4, -3>',
  'position=<-21699, -32656> velocity=< 2,  3>',
  'position=< 11089,  11068> velocity=<-1, -1>',
  'position=<-10805,  22000> velocity=< 1, -2>',
  'position=<-43598,  54797> velocity=< 4, -5>',
  'position=< 11065, -21728> velocity=<-1,  2>',
  'position=< 54768,  54799> velocity=<-5, -5>',
  'position=<-10810,  43871> velocity=< 1, -4>',
  'position=< 54803,  22001> velocity=<-5, -2>',
  'position=< 11081, -32651> velocity=<-1,  3>',
  'position=<-10782, -10792> velocity=< 1,  1>',
  'position=<-10824, -21722> velocity=< 1,  2>',
  'position=<-54529, -21728> velocity=< 5,  2>',
  'position=< 32918, -10796> velocity=<-3,  1>',
  'position=<-10773,  32938> velocity=< 1, -3>',
  'position=<-21706, -21723> velocity=< 2,  2>',
  'position=<-32664,  43864> velocity=< 3, -4>',
  'position=<-43578,  54802> velocity=< 4, -5>',
  'position=< 11082,  22007> velocity=<-1, -2>',
  'position=< 43838, -10795> velocity=<-4,  1>',
  'position=< 54766,  43871> velocity=<-5, -4>',
  'position=< 22007, -54522> velocity=<-2,  5>',
  'position=<-43601, -21726> velocity=< 4,  2>',
  'position=<-10825, -10791> velocity=< 1,  1>',
  'position=< 32950, -43584> velocity=<-3,  4>',
  'position=<-32669,  32939> velocity=< 3, -3>',
  'position=<-43564, -54524> velocity=< 4,  5>',
  'position=< 22014,  32934> velocity=<-2, -3>',
  'position=<-10797, -43584> velocity=< 1,  4>',
  'position=<-10826, -32655> velocity=< 1,  3>',
  'position=<-32690, -10791> velocity=< 3,  1>',
  'position=< 11059, -43588> velocity=<-1,  4>',
  'position=<-43598,  43869> velocity=< 4, -4>',
  'position=< 32931,  43871> velocity=<-3, -4>',
  'position=< 32927,  32941> velocity=<-3, -3>',
  'position=<-10798,  11068> velocity=< 1, -1>',
  'position=< 32938, -54524> velocity=<-3,  5>',
  'position=<-32686, -32659> velocity=< 3,  3>',
  'position=<-43601, -54522> velocity=< 4,  5>',
  'position=<-32633,  11074> velocity=< 3, -1>',
  'position=< 54766,  11068> velocity=<-5, -1>',
  'position=< 11054, -10794> velocity=<-1,  1>',
  'position=<-10805, -10791> velocity=< 1,  1>',
  'position=<-54533,  43872> velocity=< 5, -4>',
  'position=<-43590,  11076> velocity=< 4, -1>',
  'position=< 32954, -54524> velocity=<-3,  5>',
  'position=< 43877, -54524> velocity=<-4,  5>',
  'position=< 21982, -43589> velocity=<-2,  4>',
  'position=<-10824, -54518> velocity=< 1,  5>',
  'position=<-32666, -54521> velocity=< 3,  5>',
  'position=<-10789, -54523> velocity=< 1,  5>',
  'position=< 32936, -10796> velocity=<-3,  1>',
  'position=< 43850,  22008> velocity=<-4, -2>',
  'position=< 43870, -21722> velocity=<-4,  2>',
  'position=< 11059, -10792> velocity=<-1,  1>',
  'position=< 43875, -32651> velocity=<-4,  3>',
  'position=< 54769, -32653> velocity=<-5,  3>',
  'position=<-32633, -43586> velocity=< 3,  4>',
  'position=< 11046,  22007> velocity=<-1, -2>',
  'position=<-10794, -54515> velocity=< 1,  5>',
  'position=<-43598, -21725> velocity=< 4,  2>',
  'position=< 11083, -32660> velocity=<-1,  3>',
  'position=<-54504, -21728> velocity=< 5,  2>',
  'position=< 43842, -32651> velocity=<-4,  3>',
  'position=<-54533, -10794> velocity=< 5,  1>',
  'position=<-43566,  22008> velocity=< 4, -2>',
  'position=< 54817,  43873> velocity=<-5, -4>',
  'position=<-21742, -21725> velocity=< 2,  2>',
  'position=< 43836, -10793> velocity=<-4,  1>',
  'position=<-32634, -21719> velocity=< 3,  2>',
  'position=< 32918,  54800> velocity=<-3, -5>',
  'position=< 32923,  22000> velocity=<-3, -2>',
  'position=< 54774, -32651> velocity=<-5,  3>',
  'position=< 11091, -32651> velocity=<-1,  3>',
  'position=< 32902, -32654> velocity=<-3,  3>',
  'position=<-21714, -54521> velocity=< 2,  5>',
  'position=<-21755, -21726> velocity=< 2,  2>',
  'position=<-21707,  22009> velocity=< 2, -2>',
  'position=< 11099, -54522> velocity=<-1,  5>',
  'position=< 54766,  11071> velocity=<-5, -1>',
  'position=< 54803, -54521> velocity=<-5,  5>',
  'position=< 11086, -54523> velocity=<-1,  5>',
  'position=<-32641,  11068> velocity=< 3, -1>',
  'position=<-10816, -54519> velocity=< 1,  5>',
  'position=< 21991, -54516> velocity=<-2,  5>',
  'position=<-10810,  22009> velocity=< 1, -2>',
  'position=<-21729,  32933> velocity=< 2, -3>',
  'position=<-21734, -10793> velocity=< 2,  1>',
  'position=<-32674, -10790> velocity=< 3,  1>',
  'position=< 21970, -21722> velocity=<-2,  2>',
  'position=< 54802, -10792> velocity=<-5,  1>',
  'position=<-43564,  43864> velocity=< 4, -4>',
  'position=< 43878, -21720> velocity=<-4,  2>',
  'position=< 32912,  54801> velocity=<-3, -5>',
  'position=<-32674, -10788> velocity=< 3,  1>',
  'position=<-43611, -32656> velocity=< 4,  3>',
  'position=<-43572,  43873> velocity=< 4, -4>',
  'position=<-21726,  32932> velocity=< 2, -3>',
  'position=< 32926, -43590> velocity=<-3,  4>',
  'position=< 54814, -10789> velocity=<-5,  1>',
  'position=< 43834,  54796> velocity=<-4, -5>',
  'position=<-43578, -32652> velocity=< 4,  3>',
  'position=<-43590, -54523> velocity=< 4,  5>',
  'position=<-21721,  22009> velocity=< 2, -2>',
  'position=< 11043,  22000> velocity=<-1, -2>',
  'position=<-32678,  54796> velocity=< 3, -5>',
  'position=<-54496,  22005> velocity=< 5, -2>',
  'position=<-32669, -54516> velocity=< 3,  5>',
  'position=<-54525,  32933> velocity=< 5, -3>',
  'position=< 22023, -32659> velocity=<-2,  3>',
  'position=< 43866,  43869> velocity=<-4, -4>',
  'position=< 22031, -54523> velocity=<-2,  5>',
  'position=< 11067,  22006> velocity=<-1, -2>',
  'position=<-43606,  43865> velocity=< 4, -4>',
  'position=<-21737,  11075> velocity=< 2, -1>',
  'position=<-54510, -43590> velocity=< 5,  4>',
  'position=< 32918,  54801> velocity=<-3, -5>',
  'position=<-10823, -10789> velocity=< 1,  1>',
  'position=< 22027,  54805> velocity=<-2, -5>',
  'position=<-21721, -43589> velocity=< 2,  4>',
  'position=< 11054,  11069> velocity=<-1, -1>',
  'position=<-32656, -32656> velocity=< 3,  3>',
  'position=< 54766,  11077> velocity=<-5, -1>',
  'position=< 22029, -32660> velocity=<-2,  3>',
  'position=< 32942, -10789> velocity=<-3,  1>',
  'position=<-43570, -32655> velocity=< 4,  3>',
  'position=< 32926,  43871> velocity=<-3, -4>',
  'position=<-43590, -21722> velocity=< 4,  2>',
  'position=< 32926, -54522> velocity=<-3,  5>',
  'position=<-21714, -43587> velocity=< 2,  4>',
  'position=<-21710, -54520> velocity=< 2,  5>',
  'position=< 32952,  43864> velocity=<-3, -4>',
  'position=<-54536,  22004> velocity=< 5, -2>',
  'position=< 32913,  11068> velocity=<-3, -1>',
  'position=< 11098,  22009> velocity=<-1, -2>',
  'position=<-10817,  11068> velocity=< 1, -1>',
  'position=<-54493,  43866> velocity=< 5, -4>',
  'position=< 43876, -32651> velocity=<-4,  3>',
  'position=<-43589,  32932> velocity=< 4, -3>',
  'position=< 32955, -32652> velocity=<-3,  3>',
  'position=< 21999, -10787> velocity=<-2,  1>',
  'position=< 21982,  32941> velocity=<-2, -3>',
  'position=< 43883, -54524> velocity=<-4,  5>',
  'position=<-54533, -32651> velocity=< 5,  3>',
  'position=< 32953,  43869> velocity=<-3, -4>',
  'position=<-21750,  54804> velocity=< 2, -5>',
  'position=<-54554, -54520> velocity=< 5,  5>',
  'position=<-21723,  22000> velocity=< 2, -2>',
  'position=< 32918, -10789> velocity=<-3,  1>',
  'position=<-10801, -21728> velocity=< 1,  2>',
  'position=<-43561,  54805> velocity=< 4, -5>',
  'position=<-10802,  22004> velocity=< 1, -2>',
  'position=< 22002,  32938> velocity=<-2, -3>',
  'position=< 11097, -32651> velocity=<-1,  3>',
  'position=<-21724,  22000> velocity=< 2, -2>',
  'position=<-54543, -43592> velocity=< 5,  4>',
  'position=< 54775,  54796> velocity=<-5, -5>',
  'position=< 11066,  54796> velocity=<-1, -5>',
  'position=< 54814,  54798> velocity=<-5, -5>',
  'position=< 32927, -43592> velocity=<-3,  4>',
  'position=< 54803,  43872> velocity=<-5, -4>',
  'position=<-43569, -54516> velocity=< 4,  5>',
  'position=<-54498,  54796> velocity=< 5, -5>',
  'position=< 54786,  43868> velocity=<-5, -4>',
  'position=< 43850,  43873> velocity=<-4, -4>',
  'position=<-43569,  11074> velocity=< 4, -1>',
  'position=<-21714,  22000> velocity=< 2, -2>',
  'position=< 54809,  32941> velocity=<-5, -3>',
  'position=<-43590, -32653> velocity=< 4,  3>',
  'position=<-54535,  54800> velocity=< 5, -5>',
  'position=< 43863,  22007> velocity=<-4, -2>',
  'position=< 43871, -54516> velocity=<-4,  5>',
  'position=<-10810, -10789> velocity=< 1,  1>',
  'position=<-43605,  43868> velocity=< 4, -4>',
  'position=< 32942,  22008> velocity=<-3, -2>',
  'position=<-21701, -54524> velocity=< 2,  5>',
  'position=<-21722, -21721> velocity=< 2,  2>',
  'position=<-32666, -43590> velocity=< 3,  4>',
  'position=< 32926, -10792> velocity=<-3,  1>',
  'position=< 22011, -10787> velocity=<-2,  1>',
  'position=< 43846,  32935> velocity=<-4, -3>',
  'position=< 22026, -10788> velocity=<-2,  1>',
  'position=<-32682, -54515> velocity=< 3,  5>',
  'position=<-32666, -10792> velocity=< 3,  1>',
  'position=< 11071,  22004> velocity=<-1, -2>',
  'position=<-10790, -43585> velocity=< 1,  4>',
  'position=< 32934, -43590> velocity=<-3,  4>',
  'position=<-32662, -21723> velocity=< 3,  2>',
  'position=< 54790, -10790> velocity=<-5,  1>',
  'position=< 11082,  22002> velocity=<-1, -2>',
  'position=< 54766,  54801> velocity=<-5, -5>',
  'position=< 54794, -43584> velocity=<-5,  4>',
  'position=<-10789,  54805> velocity=< 1, -5>',
  'position=<-43622, -21719> velocity=< 4,  2>',
  'position=<-32682,  54796> velocity=< 3, -5>',
  'position=< 43847,  22009> velocity=<-4, -2>',
  'position=< 43890,  22007> velocity=<-4, -2>',
  'position=<-21742,  43867> velocity=< 2, -4>',
  'position=< 22023,  43869> velocity=<-2, -4>',
  'position=< 43858,  43872> velocity=<-4, -4>',
  'position=<-21697, -43583> velocity=< 2,  4>',
  'position=< 43871,  32933> velocity=<-4, -3>',
  'position=< 21980,  11077> velocity=<-2, -1>',
  'position=< 43871,  32935> velocity=<-4, -3>',
  'position=<-32669, -21727> velocity=< 3,  2>',
  'position=<-10774,  11073> velocity=< 1, -1>',
  'position=<-43594, -32655> velocity=< 4,  3>',
  'position=<-21742,  32940> velocity=< 2, -3>',
  'position=<-43595,  11077> velocity=< 4, -1>',
  'position=<-54510,  22005> velocity=< 5, -2>',
  'position=< 32912,  32932> velocity=<-3, -3>',
  'position=<-54493,  32932> velocity=< 5, -3>',
  'position=<-54497, -10796> velocity=< 5,  1>',
  'position=< 32923,  43868> velocity=<-3, -4>',
  'position=<-10815, -43588> velocity=< 1,  4>',
  'position=< 32915, -21728> velocity=<-3,  2>',
  'position=< 32931,  54805> velocity=<-3, -5>',
  'position=< 32906,  22001> velocity=<-3, -2>',
  'position=< 21986, -10796> velocity=<-2,  1>',
  'position=<-54526, -43592> velocity=< 5,  4>',
  'position=< 54822,  22000> velocity=<-5, -2>',
  'position=< 32926, -43585> velocity=<-3,  4>',
  'position=< 32931, -10791> velocity=<-3,  1>',
  'position=<-54496,  43869> velocity=< 5, -4>',
  'position=< 22005,  11073> velocity=<-2, -1>',
  'position=<-54525,  54805> velocity=< 5, -5>',
  'position=<-21710,  43867> velocity=< 2, -4>',
  'position=< 54814, -43586> velocity=<-5,  4>',
  'position=< 22002,  11074> velocity=<-2, -1>',
  'position=<-43606, -10787> velocity=< 4,  1>',
  'position=< 32913, -54524> velocity=<-3,  5>',
  'position=< 32928, -43583> velocity=<-3,  4>',
  'position=<-10826,  32939> velocity=< 1, -3>',
  'position=<-10769, -10787> velocity=< 1,  1>',
  'position=<-43574,  43870> velocity=< 4, -4>',
  'position=<-32632, -54515> velocity=< 3,  5>',
  'position=<-43613,  32941> velocity=< 4, -3>',
  'position=< 11086, -43590> velocity=<-1,  4>',
  'position=<-10773, -54517> velocity=< 1,  5>',
  'position=<-54527, -43587> velocity=< 5,  4>',
  'position=< 22014, -21727> velocity=<-2,  2>',
  'position=< 32923,  22005> velocity=<-3, -2>',
  'position=<-54493,  43865> velocity=< 5, -4>',
  'position=<-54541,  43866> velocity=< 5, -4>',
  'position=< 22019,  32941> velocity=<-2, -3>',
  'position=< 11067, -54516> velocity=<-1,  5>',
  'position=< 32912, -21723> velocity=<-3,  2>',
  'position=<-10826,  32939> velocity=< 1, -3>',
  'position=<-32637, -32659> velocity=< 3,  3>',
  'position=<-43574,  11075> velocity=< 4, -1>',
  'position=< 43834, -54521> velocity=<-4,  5>',
  'position=<-43563, -32660> velocity=< 4,  3>',
  'position=<-43601, -21725> velocity=< 4,  2>',
  'position=<-32647,  54796> velocity=< 3, -5>',
  'position=<-21758, -43592> velocity=< 2,  4>',
  'position=< 54766,  32938> velocity=<-5, -3>',
  'position=< 32946, -54524> velocity=<-3,  5>',
  'position=<-21734,  11074> velocity=< 2, -1>',
  'position=< 43892, -10787> velocity=<-4,  1>',
  'position=< 11047, -10790> velocity=<-1,  1>',
  'position=<-10794, -43590> velocity=< 1,  4>',
  'position=< 54793,  11077> velocity=<-5, -1>',
  'position=<-32633,  22000> velocity=< 3, -2>',
  'position=<-10770, -54516> velocity=< 1,  5>',
  'position=<-21749,  54802> velocity=< 2, -5>',
  'position=< 54782,  11073> velocity=<-5, -1>',
  'position=<-43564, -32651> velocity=< 4,  3>',
  'position=<-54530, -21721> velocity=< 5,  2>',
  'position=< 11096, -32655> velocity=<-1,  3>',
  'position=<-54525,  54803> velocity=< 5, -5>',
  'position=< 43863, -21720> velocity=<-4,  2>',
  'position=<-32673, -54520> velocity=< 3,  5>',
  'position=<-43562,  11071> velocity=< 4, -1>',
  'position=< 32923,  43870> velocity=<-3, -4>',
  'position=< 54791,  43873> velocity=<-5, -4>',
  'position=< 54815, -10787> velocity=<-5,  1>',
  'position=<-32634, -32653> velocity=< 3,  3>',
  'position=<-54506, -54521> velocity=< 5,  5>',
  'position=<-10821,  54796> velocity=< 1, -5>',
  'position=<-32653,  32941> velocity=< 3, -3>',
  'position=< 32950,  43869> velocity=<-3, -4>',
  'position=< 43895,  54805> velocity=<-4, -5>',
  'position=<-54506,  54804> velocity=< 5, -5>',
  'position=<-43618, -10788> velocity=< 4,  1>',
  'position=< 22013,  11077> velocity=<-2, -1>',
  'position=<-21746, -32651> velocity=< 2,  3>',
  'position=<-43619, -54522> velocity=< 4,  5>',
  'position=< 22021,  54801> velocity=<-2, -5>',
  'position=< 43858,  54804> velocity=<-4, -5>',
  'position=< 43887,  11074> velocity=<-4, -1>',
  'position=<-43602, -43588> velocity=< 4,  4>',
  'position=< 43835,  32936> velocity=<-4, -3>',
  'position=<-10823, -54517> velocity=< 1,  5>',
  'position=< 43834, -43584> velocity=<-4,  4>',
  'position=< 43883,  11068> velocity=<-4, -1>',
  'position=<-43561, -10794> velocity=< 4,  1>',
  'position=< 11070, -10788> velocity=<-1,  1>',
  'position=< 11098,  22000> velocity=<-1, -2>',
  'position=<-10767,  22000> velocity=< 1, -2>',
  'position=< 54787, -54517> velocity=<-5,  5>',
  'position=< 22002,  54804> velocity=<-2, -5>',
  'position=<-54543,  22009> velocity=< 5, -2>',
  'position=< 43869, -10792> velocity=<-4,  1>',
  'position=<-10797, -43591> velocity=< 1,  4>',
  'position=< 54806,  11075> velocity=<-5, -1>',
  'position=< 43834, -32652> velocity=<-4,  3>',
  'position=< 54766,  54799> velocity=<-5, -5>',
  'position=< 54790, -10790> velocity=<-5,  1>',
  'position=< 32955,  43871> velocity=<-3, -4>'
];

// const input = [
//   'position=< 9, 1> velocity=< 0, 2>',
//   'position=< 7, 0> velocity=<-1, 0>',
//   'position=< 3, -2> velocity=<-1, 1>',
//   'position=< 6, 10> velocity=<-2, -1>',
//   'position=< 2, -4> velocity=< 2, 2>',
//   'position=<-6, 10> velocity=< 2, -2>',
//   'position=< 1, 8> velocity=< 1, -1>',
//   'position=< 1, 7> velocity=< 1, 0>',
//   'position=<-3, 11> velocity=< 1, -2>',
//   'position=< 7, 6> velocity=<-1, -1>',
//   'position=<-2, 3> velocity=< 1, 0>',
//   'position=<-4, 3> velocity=< 2, 0>',
//   'position=<10, -3> velocity=<-1, 1>',
//   'position=< 5, 11> velocity=< 1, -2>',
//   'position=< 4, 7> velocity=< 0, -1>',
//   'position=< 8, -2> velocity=< 0, 1>',
//   'position=<15, 0> velocity=<-2, 0>',
//   'position=< 1, 6> velocity=< 1, 0>',
//   'position=< 8, 9> velocity=< 0, -1>',
//   'position=< 3, 3> velocity=<-1, 1>',
//   'position=< 0, 5> velocity=< 0, -1>  ',
//   'position=<-2, 2> velocity=< 2, 0>',
//   'position=< 5, -2> velocity=< 1, 2>',
//   'position=< 1, 4> velocity=< 2, 1>',
//   'position=<-2, 7> velocity=< 2, -2>',
//   'position=< 3, 6> velocity=<-1, -1>',
//   'position=< 5, 0> velocity=< 1, 0>',
//   'position=<-6, 0> velocity=< 2, 0>',
//   'position=< 5, 9> velocity=< 1, -2>',
//   'position=<14, 7> velocity=<-2, 0>',
//   'position=<-3, 6> velocity=< 2, -1>'
// ];

const getFirstCoords = (input) => {
  if (typeof input[0].x !== 'undefined') {
    return [input[0].x, input[0].y];
  }
  const inputSplit = input[0].split('> velocity=<');
  return inputSplit[0].split('position=<')[1].split(',');
};

const formatInput = (input) => {
  const firstCoords = getFirstCoords(input);
  const output = {
    maxX: parseInt(firstCoords[0], 10),
    minX: parseInt(firstCoords[0], 10),
    maxY: parseInt(firstCoords[1], 10),
    minY: parseInt(firstCoords[1], 10),
    points: []
  };

  const formattedInput = input.map((row) => {
    const record = {};
    // Lazy so using split
    const inputSplit = row.split('> velocity=<');

    const coords = inputSplit[0].split('position=<')[1].split(',');
    record.x = parseInt(coords[0], 10);
    record.y = parseInt(coords[1], 10);
    output.points.push([record.x, record.y]);

    if (record.x > output.maxX) output.maxX = record.x;
    else if (record.x < output.minX) output.minX = record.x;
    if (record.y > output.maxY) output.maxY = record.y;
    else if (record.y < output.minY) output.minY = record.y;

    const velocity = inputSplit[1].slice(0, -1).split(',');
    record.vHorizontal = parseInt(velocity[0], 10);
    record.vVertical = parseInt(velocity[1], 10);

    return record;
  });

  output.formattedInput = formattedInput;

  return output;
};

const getCurrentMap = (formattedInput) => {
  map = [];
  const width = formattedInput.maxX - formattedInput.minX;
  const height = formattedInput.maxY - formattedInput.minY;

  if (width > 500 || height > 500) {
    return null;
  }

  for (let i = formattedInput.minY; i < formattedInput.maxY + 1; i++) {
    let row = '';

    for (let j = formattedInput.minX; j < formattedInput.maxX + 1; j++) {
      if (
        formattedInput.points.findIndex(
          (point) => point[0] === j && point[1] === i
        ) > -1
      ) {
        row = row + '#';
      } else {
        row = row + '.';
      }
    }
    map.push(row);
  }
  return map;
};

const moveAllPoints = (formattedInput) => {
  const firstCoords = getFirstCoords(formattedInput.formattedInput);
  const output = {
    maxX: parseInt(firstCoords[0], 10),
    minX: parseInt(firstCoords[0], 10),
    maxY: parseInt(firstCoords[1], 10),
    minY: parseInt(firstCoords[1], 10),
    points: []
  };
  output.formattedInput = formattedInput.formattedInput.map((record) => {
    // console.log(record)
    record.x = record.x + record.vHorizontal;
    record.y = record.y + record.vVertical;

    if (record.x > output.maxX) output.maxX = record.x;
    else if (record.x < output.minX) output.minX = record.x;
    if (record.y > output.maxY) output.maxY = record.y;
    else if (record.y < output.minY) output.minY = record.y;

    // console.log(record)
    output.points.push([record.x, record.y]);
    return record;
  });
  return output;
};

let numSeconds = 0;

const createNextMaps = (input, numMaps) => {
  let formattedInput = formatInput(input);
  let currentMap;
  for (let i = 0; i < numMaps; i++) {
    numSeconds = i;
    currentMap = getCurrentMap(formattedInput);
    logIfHasNInARow(currentMap, NUM_IN_ROW_LOG);
    formattedInput = moveAllPoints(formattedInput);
  }
};

const logIfHasNInARow = (map, numNeededInARow) => {
  if (!map) return;
  const stringToLookFor = Array(numNeededInARow)
    .fill('#')
    .join('');
  const has3InRow = map.some((row) => row.includes(stringToLookFor));
  if (has3InRow) console.log(numSeconds, map);
  // console.log(map);
};

const NUM_IN_ROW_LOG = 5;
createNextMaps(input, 50000);
