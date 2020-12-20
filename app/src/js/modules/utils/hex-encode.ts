function toHex(s) {
  // utf8 to latin1
  s = unescape(encodeURIComponent(s));
  let h = '';
  for (let i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16);
  }
  return h;
}

function hexedDBName(username) {
  return `userdb-${toHex(username)}`;
}

export {hexedDBName};