import dice from '../utils/dice'

export default () => {
  const nm1 = ['ae', 'au', 'ei', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u']
  const nm2 = ['', '', '', 'b', 'bl', 'br', 'bh', 'd', 'dr', 'dh', 'f', 'fr', 'g', 'gh', 'gr', 'gl', 'h', 'hy', 'hr', 'j', 'k', 'kh', 'kr', 'l', 'll', 'm', 'n', 'p', 'pr', 'r', 'rh', 's', 'sk', 'sg', 'sm', 'sn', 'st', 't', 'th', 'thr', 'ty', 'v', 'y']
  const nm3 = ['bl', 'br', 'd', 'db', 'dbr', 'dd', 'ddg', 'dg', 'dl', 'dm', 'dr', 'dv', 'f', 'fd', 'fgr', 'fk', 'fl', 'fn', 'fr', 'fst', 'fv', 'g', 'gb', 'gd', 'gf', 'gg', 'ggv', 'gl', 'gn', 'gr', 'gss', 'gv', 'k', 'kk', 'l', 'lb', 'lc', 'ld', 'ldr', 'lf', 'lfr', 'lg', 'lgr', 'lk', 'll', 'llg', 'llk', 'llv', 'lm', 'ln', 'lp', 'lr', 'ls', 'lsk', 'lsn', 'lst', 'lsv', 'lt', 'lv', 'm', 'md', 'mk', 'ml', 'mm', 'ms', 'n', 'nb', 'nd', 'ndr', 'ng', 'nl', 'nn', 'nng', 'nr', 'nsk', 'nt', 'nv', 'nw', 'p', 'pl', 'pp', 'pr', 'r', 'rb', 'rd', 'rdg', 'rf', 'rg', 'rgr', 'rk', 'rkm', 'rl', 'rls', 'rm', 'rn', 'rng', 'rngr', 'rnh', 'rnk', 'rns', 'rnv', 'rr', 'rst', 'rt', 'rth', 'rtm', 'rv', 's', 'sb', 'sbr', 'sg', 'sgr', 'sk', 'sl', 'sm', 'sn', 'sr', 'ssk', 'st', 'stm', 'str', 'sv', 't', 'tg', 'th', 'thg', 'thn', 'thr', 'thv', 'tm', 'tr', 'tt', 'ttf', 'tv', 'v', 'yv', 'z', 'zg', 'zl', 'zn']
  const nm4 = ['d', 'dr', 'f', 'g', 'kr', 'k', 'l', 'ld', 'lf', 'lk', 'll', 'lr', 'm', 'mm', 'n', 'nd', 'nn', 'r', 'rd', 'rn', 'rr', 's', 'th', 't']
  const nm5 = ['', '', '', 'b', 'br', 'bh', 'ch', 'd', 'dh', 'f', 'fr', 'g', 'gh', 'gr', 'gw', 'gl', 'h', 'j', 'k', 'kh', 'm', 'n', 'r', 'rh', 's', 'sh', 'st', 'sv', 't', 'th', 'thr', 'tr', 'v', 'w']
  const nm6 = ['ae', 'ea', 'ie', 'ei', 'io', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u']
  const nm7 = ['bj', 'c', 'd', 'dd', 'df', 'dl', 'dr', 'f', 'ff', 'fl', 'fn', 'fr', 'fth', 'g', 'gd', 'gm', 'gn', 'gnh', 'gr', 'h', 'hh', 'k', 'l', 'ld', 'lf', 'lfh', 'lg', 'lgr', 'lh', 'lk', 'll', 'lm', 'lr', 'ls', 'lv', 'm', 'mm', 'n', 'nd', 'ndr', 'ng', 'ngr', 'ngv', 'nh', 'nl', 'nn', 'nnh', 'nr', 'ns', 'nt', 'nv', 'r', 'rd', 'rf', 'rg', 'rgh', 'rgr', 'rh', 'rk', 'rl', 'rm', 'rn', 'rnd', 'rng', 'rr', 'rst', 'rt', 'rth', 'rtr', 'rv', 's', 'sb', 'sd', 'sg', 'sh', 'sl', 'st', 'stn', 'str', 'sv', 't', 'thr', 'tk', 'tr', 'tt', 'tth', 'v', 'y', 'yj', 'ym', 'yn']
  const nm8 = ['', '', '', '', 'f', 'g', 'h', 'l', 'n', 'nn', 's', 'sh', 'th', 'y']

  const gender = dice.roll(2)

  let rnd, rnd2, rnd3, rnd4, rnd5, rnd6, rnd7, names

  const i = dice.roll(10)
  if (gender === 1) {
    rnd = dice.roll(nm5.length)
    rnd2 = dice.roll(nm6.length)
    rnd3 = dice.roll(nm8.length)
    if (i < 3) {
      while (rnd < 5) {
        rnd = dice.roll(nm5.length)
      }
      names = nm5[rnd - 1] + nm6[rnd2 - 1] + nm8[rnd3 - 1]
    } else if (i < 8) {
      rnd4 = dice.roll(nm6.length)
      if (rnd2 < 5) {
        while (rnd4 < 5) {
          rnd4 = dice.roll(nm6.length)
        }
      }
      rnd5 = dice.roll(nm7.length)
      names = nm5[rnd - 1] + nm6[rnd2 - 1] + nm7[rnd5 - 1] + nm6[rnd4 - 1] + nm8[rnd3 - 1]
    } else {
      rnd4 = dice.roll(nm6.length)
      if (rnd2 < 5) {
        while (rnd4 < 5) {
          rnd4 = dice.roll(nm6.length)
        }
      }
      rnd5 = dice.roll(nm7.length)
      rnd6 = dice.roll(nm6.length)
      if (rnd2 < 5 || rnd4 < 5) {
        while (rnd6 < 5) {
          rnd6 = dice.roll(nm6.length)
        }
      }
      rnd7 = dice.roll(nm7.length)
      names = nm5[rnd - 1] + nm6[rnd2 - 1] + nm7[rnd5 - 1] + nm6[rnd4 - 1] + nm7[rnd7 - 1] + nm6[rnd6 - 1]
    }
  } else {
    rnd = dice.roll(nm2.length)
    rnd2 = dice.roll(nm1.length)
    rnd3 = dice.roll(nm4.length)
    if (i < 3) {
      names = nm2[rnd - 1] + nm1[rnd2 - 1] + nm4[rnd3 - 1]
    } else if (i < 8) {
      rnd4 = dice.roll(nm1.length)
      if (rnd < 3) {
        while (rnd4 < 3) {
          rnd4 = dice.roll(nm1.length)
        }
      }
      rnd5 = dice.roll(nm3.length)
      names = nm2[rnd - 1] + nm1[rnd2 - 1] + nm3[rnd5 - 1] + nm1[rnd4 - 1] + nm4[rnd3 - 1]
    } else {
      rnd4 = dice.roll(nm1.length)
      if (rnd < 3) {
        while (rnd4 < 3) {
          rnd4 = dice.roll(nm1.length)
        }
      }
      rnd5 = dice.roll(nm3.length)
      rnd6 = dice.roll(nm1.length)
      if (rnd < 3 || rnd4 < 3) {
        while (rnd6 < 3) {
          rnd6 = dice.roll(nm1.length)
        }
      }
      rnd7 = dice.roll(nm3.length)
      names = nm2[rnd - 1] + nm1[rnd2 - 1] + nm3[rnd5 - 1] + nm1[rnd4 - 1] + nm3[rnd7 - 1] + nm1[rnd6 - 1] + nm4[rnd3 - 1]
    }
  }
  return names
}
