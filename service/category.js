import http from "./config";

const category = {
  create: (data) => http.post("/category", data),
  get: () => http.get("/categories", { params: { page: 1, limit: 10 } }),
  delete: (id) => http.delete(`/category/${id}`),
  update: (item) => http.put("/category", item),
};

export default category;
