export function censorString(string, visibleChars = 4) {
  return `${string.slice(0, visibleChars)}${"*".repeat(string.slice(visibleChars).length)}`;
}

export function joinName(name, lastName) {
  return `${name} ${lastName}`;
}
