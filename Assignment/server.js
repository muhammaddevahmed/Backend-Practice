const express = require('express');
const app = express();
const router = require("./routes/router");

app.use(express.json());
app.use('/',router);

const PORT = 3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

console.log('Router module loaded:', require.resolve('./routes/router'));
