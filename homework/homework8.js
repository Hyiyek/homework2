function normalizeName(value) {
  const name = String(value ?? "").trim();

  if (name === "") {
    return "이름없음";
  }

  return name;
}

console.log(normalizeName("  김하나  "));
console.log(normalizeName(""));
console.log(normalizeName(null));
console.log(normalizeName(undefined));