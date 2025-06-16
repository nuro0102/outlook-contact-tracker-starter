import { initGraph } from './graph.js';
import { renderUI } from './ui.js';
(async () => {
  await initGraph();
  const data = await fetchContactData();
  renderUI(data);
})();
