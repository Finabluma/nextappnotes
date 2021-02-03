import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({messages:'ok'})
  })
  .post((req, res) => {
    res.json({messages:'posted'})
  })

export default handler;

