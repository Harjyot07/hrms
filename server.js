/*  maxx-clone  –  Express static server  */
const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

/*  serve every file that exists in the project folder  */
app.use(express.static(__dirname));

/*  fallback: send index.html for any route NOT already served  */
app.get(/^(.*)$/, (req, res) =>
  res.sendFile(path.resolve(__dirname, 'index.html'))
);

/*  start listener  */
app.listen(PORT, () =>
  console.log(`✅  Server running → http://localhost:${PORT}`)
);
