import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xUPsJBvdd3FLY0WdepfIxQNys4XFeqDImi8UiJ-GNN83RyUy5cTz3NQtSGcplZj7DVrdVaFpDwtd54xRVBgxTMLLPXnywa3ah5ychtwPXfBkQTl6KgHV5yjauPuzX3Yx",
  },
});
