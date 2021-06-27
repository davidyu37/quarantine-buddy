import Filter from 'bad-words-chinese'
import { query } from '../../../lib/db'

const filter = new Filter()

const handler = async (req, res) => {
  try {
    const results = await query(
      `
      SELECT * FROM topics
      ORDER BY id DESC
    `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
