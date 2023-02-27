const data = new Map<
  string,
  "make" | "model" | "colour" | "bodyType" | "fuelType"
>([
  ["ford", "make"],
  ["audi", "make"],
  ["bmw", "make"],
  ["fiesta", "model"],
  ["focus", "model"],
  ["TT", "model"],
  ["A4", "model"],
  ["M1", "model"],
  ["M2", "model"],
  ["red", "colour"],
  ["green", "colour"],
  ["blue", "colour"],
  ["electric", "fuelType"],
  ["hybrid", "fuelType"],
  ["petrol", "fuelType"],
  ["diesel", "fuelType"],
  ["hatchback", "bodyType"],
  ["coupe", "bodyType"],
  ["suv", "bodyType"],
  ["convertible", "bodyType"],
]);

export default data;
